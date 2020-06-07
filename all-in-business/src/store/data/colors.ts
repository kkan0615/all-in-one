export enum DesginColorModeEnum {
  'dark' = 'dark',
  'light' = 'light'
}

export interface DesginColorInterface {
  key : string
  mode: DesginColorModeEnum
  mainColor : string
  subColorOne : string
  subColorTwo ?: string
  subColorThree ?: string
  subColorFour ?: string
  subColorFive ?: string
}

export const designColorList : Array<DesginColorInterface> = [
  {
    key: 'bluePinkDark',
    mode: DesginColorModeEnum.dark,
    mainColor: '#000000',
    subColorOne: '#3B62D9',
    subColorTwo: '#290759',
    subColorThree: '#F257E8',
    subColorFour: '#169EF2',
    subColorFive: '#16B4F2'
  },
  {
    key: 'bluePinkLight',
    mode: DesginColorModeEnum.light,
    mainColor: '#FFFFFF',
    subColorOne: '#F257E8',
    subColorTwo: '#290759',
    subColorThree: '#3B62D9',
    subColorFour: '#169EF2',
    subColorFive: '#16B4F2'
  }
]
