export function timeStampFormatter(duration: number) {
  return `${Math.round(duration / 60)}:${Math.round(duration % 60)}`
}
