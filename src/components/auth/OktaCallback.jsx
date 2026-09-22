import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js'

export default function OktaCallback() {
  const { oktaAuth, authState } = useOktaAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [callbackProcessed, setCallbackProcessed] = useState(false)
  const handled = useRef(false)
  const originalUri = useRef('/')

  // Step 1: process the callback once (useRef prevents StrictMode double-invoke)
  useEffect(() => {
    if (handled.current) return
    handled.current = true

    if (!oktaAuth.isLoginRedirect()) {
      navigate('/', { replace: true })
      return
    }

    originalUri.current = toRelativeUrl(
      oktaAuth.getOriginalUri() || '/',
      window.location.origin
    )

    oktaAuth.handleLoginRedirect()
      .then(() => setCallbackProcessed(true))
      .catch(err => setError(err))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Step 2: navigate only after both the callback is processed AND authState confirms authentication
  useEffect(() => {
    if (callbackProcessed && authState?.isAuthenticated) {
      navigate(originalUri.current, { replace: true })
    }
  }, [callbackProcessed, authState?.isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-600 font-semibold">Authentication error</p>
        <pre className="text-sm text-gray-700 bg-gray-100 p-4 rounded max-w-xl whitespace-pre-wrap">
          {error?.errorSummary || error?.message || String(error)}
        </pre>
        <a href="/" className="text-blue-600 underline">Go home</a>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-400">Completing sign-in...</p>
    </div>
  )
}
