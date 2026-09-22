import { useNavigate } from 'react-router-dom'
import { Security } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js'
import oktaAuth from '../../okta'

export default function OktaSecurity({ children }) {
  const navigate = useNavigate()

  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true })
  }

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {children}
    </Security>
  )
}
