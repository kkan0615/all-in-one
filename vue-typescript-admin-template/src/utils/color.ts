export interface RgbInterface {
  r: number;
  g: number;
  b: number;
}

export const hexToRgb = (hex: string): RgbInterface => {
  hex = hex.substr(1)
  const result = hex.match(/.{1,2}/g)

  if (!result) {
    throw new Error(`${result} is not defined. Please check your hex string`)
  }

  return {
    r: parseInt(result[0], 16),
    g: parseInt(result[1], 16),
    b: parseInt(result[2], 16)
  }
}

export const isLight = (hex: string): boolean => {
  const rgb = hexToRgb(hex)

  if (!rgb) {
    throw new Error(`${rgb} is not set`)
  }

  return rgb.r > 220
}
