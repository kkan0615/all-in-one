// @TODO: number utils will be here

export function commaFormatter (num: string | number): string {
  if (!num) {
    return ''
  }
  /* Initialize value */
  if (typeof num === 'number') {
    num = num.toString()
  }
  /** Cut in per 1000 but do not cut fractional part */
  const integerPart = num.split('.')[0]
  const fractionalPart = num.split('.')[1]
  return integerPart.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    + `${num.includes('.') ? '.' : ''}`
    + `${fractionalPart ? fractionalPart : ''}`
}

export function hexToDecimal (hexString: string) {
  return parseInt(hexString, 16)
}
