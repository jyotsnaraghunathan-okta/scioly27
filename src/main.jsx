import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { ProgressProvider } from './context/ProgressContext'
import { SubjectProvider } from './context/SubjectContext'
import OktaSecurity from './components/auth/OktaSecurity'
import App from './App.jsx'
import './index.css'

function AppWithProgress() {
  const { authState } = useOktaAuth()
  const claims = authState?.idToken?.claims
  const userId = claims?.sub

  // Register user profile so admin can look up by name
  if (userId) {
    try {
      const registry = JSON.parse(localStorage.getItem('sc27-user-registry') || '{}')
      registry[userId] = { sub: userId, name: claims.name || '', email: claims.email || '' }
      localStorage.setItem('sc27-user-registry', JSON.stringify(registry))
    } catch { /* ignore */ }
  }

  return (
    <SubjectProvider>
      <ProgressProvider key={userId} userId={userId}>
        <App />
      </ProgressProvider>
    </SubjectProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OktaSecurity>
        <AppWithProgress />
      </OktaSecurity>
    </BrowserRouter>
  </StrictMode>,
)
