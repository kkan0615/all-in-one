interface ColorOptionInterface {
  primary: string
  secondary: string
  accent: string
}

export interface ColorInterface {
  nightMode: boolean
  isLight: boolean,
  light: ColorOptionInterface
  dark: ColorOptionInterface
}
