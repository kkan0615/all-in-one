export function getRandomValue(arr: Array<any>) {
  const result = []
  const loopRanValue = Math.floor(Math.random() * arr.length) + 1

  for (let i = 0; i < loopRanValue; i++) {
    const indexRan = Math.floor(Math.random() * arr.length)
    const targetValue = arr[indexRan]
    const existValue = result.find(e => e.id === targetValue.id)
    if (!existValue) {
      result.push(targetValue)
    }
  }
  if (result.length === 0) {
    result.push(arr[0])
  }
  return result
}
