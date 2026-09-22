import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://itpoktane24.oktapreview.com/oauth2/default',
  clientId: '0oawb6o6ugZeBgPt21d7',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
})

export default oktaAuth
