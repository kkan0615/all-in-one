import Cookies from 'js-cookie'

const AUTHTOKENKEY = 'Auth-Token'

function getAuthToken() {
  return Cookies.get(AUTHTOKENKEY)
}

function setAuthToken(token: string) {
  Cookies.set(AUTHTOKENKEY, token)
}

export { getAuthToken, setAuthToken }
