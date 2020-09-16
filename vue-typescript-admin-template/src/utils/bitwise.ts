/**
 * string to hex
 * @param hexString
 * @return parsed hex number(number type)
 */
export function toHex (hexString: string) {
  return parseInt(hexString, 16)
}

/**
 *
 * @param hexString
 * @return number - parsed decimal
 */
export function hexTodDecimal (hexString: string): number {
  return parseInt(hexString, 16)
}
