/**
 * string to hex
 * @param hexString
 * @return parsed hex number(number type)
 */
export function toHex (hexString: string) {
  return parseInt(hexString, 16)
}

/**
 * hex to decimal
 * @param hexString
 */
export function hexTodDecimal (hexString: string) {
  return (parseInt(hexString, 16).toString(2)).padStart(8, '0')
}
