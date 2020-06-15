import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getLanguageCookie } from '@/utils/cookies'

import enLocale from './en'
import krLocale from './kr'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  kr: {
    ...krLocale
  }
}

export const getLocale = () => {
  const cookieLang = getLanguageCookie()
  if (cookieLang) {
    return cookieLang
  }

  /** If there is no set cookie */
  const lang = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const iterator of locales) {
    if (lang.indexOf(iterator) > -1) {
      return iterator
    }
  }

  /** Default */
  return 'en'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n
