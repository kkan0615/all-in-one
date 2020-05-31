import Cookies from 'js-cookie'
import { SettingInterface } from '@/store/modules/setting'

/** Set the all values in the setting into cookies */
function setSetting(setting: SettingInterface) {
  for (const [key, value] of Object.entries(setting)) {
    Cookies.set(key, value)
  }
}

export { setSetting }
