import { colorConfig } from '@/config/defaultColorConfig'
import { ColorInterface } from '@/types/colors'

export const checkColorToLocalStorage = () => {
  const ls = localStorage.getItem('color')
  if (!ls) {
    localStorage.setItem('color', JSON.stringify(colorConfig))
  }
}

export const getColorFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('color') || JSON.stringify(colorConfig))
}

export const setColorToLocalStorage = (color: ColorInterface) => {
  localStorage.setItem('color', JSON.stringify(color))
}
