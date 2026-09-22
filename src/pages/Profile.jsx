import { useOktaAuth } from '@okta/okta-react'

export default function Profile() {
  const { authState } = useOktaAuth()
  const claims = authState?.idToken?.claims

  return (
    <div className="max-w-lg space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>

      <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
        <ProfileRow label="Name" value={claims?.name} />
        <ProfileRow label="Email" value={claims?.email} />
        <ProfileRow label="User ID" value={claims?.sub} mono />
      </div>
    </div>
  )
}

function ProfileRow({ label, value, mono }) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-sm text-gray-900 ${mono ? 'font-mono' : 'font-medium'}`}>
        {value || '—'}
      </span>
    </div>
  )
}
