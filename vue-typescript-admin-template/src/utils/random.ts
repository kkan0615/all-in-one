// @TODO: Random utils will be here

export function generatorIntegerRandom (max: number, min = 0) {
  return Math.floor((Math.random() * max) + min)
}
