export function timestamp(time: number) {
  const result = `${Math.round(time / 60)}:${Math.round(time % 60)}`
  return result
}
