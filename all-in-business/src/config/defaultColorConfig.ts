import { ColorInterface } from '@/types/colors'
import { colors } from 'vuetify/lib'

export const colorConfig: ColorInterface = {
  nightMode: true,
  isLight: false,
  light: {
    primary: colors.blue.base,
    secondary: colors.blue.lighten4,
    accent: colors.blue.darken1
  },
  dark: {
    primary: colors.blue.base,
    secondary: colors.blue.lighten4,
    accent: colors.blue.darken1
  }
}

