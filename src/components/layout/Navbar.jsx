import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { useSubject } from '../../context/SubjectContext'
import { subjects } from '../../data/subjects'

const navLinks = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/study', label: 'Study Guide', icon: '📖' },
  { to: '/flashcards', label: 'Flashcards', icon: '🃏' },
  { to: '/glossary', label: 'Glossary', icon: '📚' },
  { to: '/practice', label: 'Practice', icon: '✏️' },
  { to: '/tests', label: 'Tests', icon: '📝' },
  { to: '/revise', label: 'Revise Again', icon: '🔁' },
  { to: '/progress', label: 'Progress', icon: '📈' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { oktaAuth, authState } = useOktaAuth()
  const { selectedSubjectId, selectSubject } = useSubject()

  const user = authState?.idToken?.claims
  const isAdmin = user?.sub === '00uhjjfsh3od54CAQ1d7'
  const handleLogout = () => oktaAuth.signOut()

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId)

  const isFreshwater = selectedSubjectId === 'dynamic-planet'
  const isSolar = selectedSubjectId === 'solar-system'

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
      isFreshwater
        ? 'bg-teal-50/90 border-teal-200 backdrop-blur-sm'
        : isSolar
        ? 'bg-amber-50/90 border-amber-200 backdrop-blur-sm'
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Subject dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-lg">{activeSubject?.icon}</span>
            <select
              value={selectedSubjectId}
              onChange={(e) => selectSubject(e.target.value)}
              className={`text-sm font-semibold border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 cursor-pointer transition-colors duration-500 ${
              isFreshwater
                ? 'border-teal-300 bg-teal-50 text-gray-800 focus:ring-teal-400'
                : isSolar
                ? 'border-amber-300 bg-amber-50 text-gray-800 focus:ring-amber-400'
                : 'border-gray-200 bg-white text-gray-800 focus:ring-blue-500'
            }`}
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>{s.icon} {s.name}</option>
              ))}
            </select>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))
                    ? isFreshwater ? 'bg-teal-100 text-teal-700' : isSolar ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-700'
                    : isFreshwater ? 'text-teal-800 hover:bg-teal-100/60 hover:text-teal-900' : isSolar ? 'text-amber-800 hover:bg-amber-100/60 hover:text-amber-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>

          {/* Admin link */}
          {isAdmin && (
            <Link to="/admin" className="px-3 py-2 rounded-lg text-sm font-medium no-underline text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              ⚙️ Admin
            </Link>
          )}

          {/* User + logout */}
          {authState?.isAuthenticated && (
            <div className="hidden md:flex items-center gap-3">
              <Link to="/profile" className="text-sm no-underline text-gray-500 hover:text-gray-900">{user?.name || user?.email}</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 bg-transparent cursor-pointer"
              >
                Sign out
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 bg-transparent border-none cursor-pointer text-xl"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium no-underline mt-1 ${
                  location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))
                    ? isFreshwater ? 'bg-teal-100 text-teal-700' : isSolar ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-700'
                    : isFreshwater ? 'text-teal-800 hover:bg-teal-100/60' : isSolar ? 'text-amber-800 hover:bg-amber-100/60' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
            {authState?.isAuthenticated && (
              <div className="mt-3 pt-3 border-t border-gray-100 px-1">
                <p className="text-xs mb-1 text-gray-400">{user?.name || user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 bg-transparent border-none cursor-pointer"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
