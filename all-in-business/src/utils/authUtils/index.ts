import Cookies from 'js-cookie'

/** Key for token */
const AUTHTOKENKEY = 'Auth-Token'

const EXPRIEIN = new Date(Date.now() + 1000 * 60 * 60 * 24)

function getAuthToken() {
  return Cookies.get(AUTHTOKENKEY)
}

function setAuthToken(token: string) {
  Cookies.set(AUTHTOKENKEY, token, {
    expires: EXPRIEIN
  })
}

export { getAuthToken, setAuthToken }
