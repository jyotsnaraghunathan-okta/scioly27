import { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'

const PROGRESS_KEYS = ['sc27-test-results', 'sc27-practice-results', 'sc27-completed-study']

function getRegistry() {
  try {
    return JSON.parse(localStorage.getItem('sc27-user-registry') || '{}')
  } catch { return {} }
}

function getUsersWithData() {
  const ids = new Set()
  for (let i = 0; i < localStorage.length; i++) {
    const match = localStorage.key(i)?.match(/^(.+?):sc27-.+$/)
    if (match) ids.add(match[1])
  }
  return ids
}

function clearUserProgress(userId) {
  PROGRESS_KEYS.forEach(k => localStorage.removeItem(`${userId}:${k}`))
}

export default function Admin() {
  const { authState } = useOktaAuth()
  const currentUserId = authState?.idToken?.claims?.sub

  const [query, setQuery] = useState('')
  const [registry, setRegistry] = useState({})
  const [usersWithData, setUsersWithData] = useState(new Set())
  const [cleared, setCleared] = useState(null)

  useEffect(() => {
    setRegistry(getRegistry())
    setUsersWithData(getUsersWithData())
  }, [])

  const handleClear = (userId) => {
    clearUserProgress(userId)
    setCleared(userId)
    setUsersWithData(getUsersWithData())
    setTimeout(() => setCleared(null), 3000)
  }

  // All known users = union of registry + users with data in localStorage
  const allIds = new Set([...Object.keys(registry), ...usersWithData])
  const allUsers = [...allIds].map(id => ({
    sub: id,
    name: registry[id]?.name || '',
    email: registry[id]?.email || '',
    hasData: usersWithData.has(id),
  }))

  const filtered = query.trim()
    ? allUsers.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase()) ||
        u.sub.toLowerCase().includes(query.toLowerCase())
      )
    : allUsers

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin — Reset Progress</h1>
        <p className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mt-2">
          ⚠️ Only users who have logged in on <strong>this browser</strong> appear here.
        </p>
      </div>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by name, email or user ID…"
        className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400">No users found.</p>
      ) : (
        <div className="space-y-2">
          {filtered.map(u => (
            <div key={u.sub} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {u.name || <span className="text-gray-400 italic">Unknown name</span>}
                  {u.sub === currentUserId && <span className="ml-2 text-xs text-blue-500">you</span>}
                </p>
                <p className="text-xs text-gray-400 truncate">{u.email}</p>
                <p className="text-xs font-mono text-gray-300 truncate">{u.sub}</p>
              </div>
              <button
                onClick={() => handleClear(u.sub)}
                disabled={!u.hasData}
                className="ml-4 shrink-0 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 bg-transparent cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {u.hasData ? 'Reset' : 'No data'}
              </button>
            </div>
          ))}
        </div>
      )}

      {cleared && (
        <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
          ✓ Progress cleared for <span className="font-mono">{registry[cleared]?.name || cleared}</span>
        </p>
      )}
    </div>
  )
}
