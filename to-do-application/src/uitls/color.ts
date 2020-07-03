interface RgbInterface {
  r: number,
  g: number,
  b: number
}

export const hexToRgb = (hex: string): RgbInterface | null => {
  hex = hex.substr(1)
  const result = hex.match(/.{1,2}/g)

  return result ? {
    r: parseInt(result[0], 16),
    g: parseInt(result[1], 16),
    b: parseInt(result[2], 16)
  } : null
}

export const islightColor = (hex: string): boolean | null => {
  const rgb = hexToRgb(hex)

  if (!rgb) {
    return null
  }

  if (rgb.r > 220) {
    return true
  } else {
    return false
  }
}
