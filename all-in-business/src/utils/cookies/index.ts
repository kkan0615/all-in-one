import Cookies from 'js-cookie'

/** Key for token */
const LANGUAGEKEY = 'language'

function getLanguageCookie() {
  return Cookies.get(LANGUAGEKEY)
}

function setLanguageCookie(lang: string) {
  Cookies.set(LANGUAGEKEY, lang)
}

export { getLanguageCookie, setLanguageCookie }
