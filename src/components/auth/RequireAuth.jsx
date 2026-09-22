import { useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'

export default function RequireAuth({ children }) {
  const { oktaAuth, authState } = useOktaAuth()

  useEffect(() => {
    if (authState && !authState.isAuthenticated) {
      oktaAuth.signInWithRedirect()
    }
  }, [authState, oktaAuth])

  if (!authState || !authState.isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Loading...</p>
      </div>
    )
  }

  return children
}
