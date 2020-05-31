/**
 *
 * @param currency - Currency
 * @param number  - Changed Number
 * @return stirng - Formatted number
 */
export function currencyFormatter(currency: string, number: number): string {
  let result = ''

  switch (currency) {
    case 'kr':
      result = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      break

    case 'en':
      result = number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      break

    default:
      throw new Error(`Currency is wrong! Unexpected Currency type: ${currency}`)
  }

  return result
}

/**
 *
 * @param number  - Changed Number
 * @return stirng - Formatted number
 */
export function numberFormatter(number: number | string): string {
  let result = ''

  if (typeof number === 'number') {
    number = number.toString()
  }

  /** Cut in per 1000 */
  result = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  return result
}
