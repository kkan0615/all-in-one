import colors from 'vuetify/lib/util/colors'

const colorOptions: Array<string> = [
  'red',
  'pink',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'lime',
  'amber',
  'orange',
  'brown',
]

export function generatorIntegerRandom (max: number, min = 0) {
  return Math.floor((Math.random() * max) + min)
}

export function generatorIntegerRandomArray (max: number, size: number, min = 0) {
  const result: Array<number> = []
  for (let i = 0; i < size; i++) {
    result.push(generatorIntegerRandom(max, min))
  }

  return result
}

export function generatorColorRandom (size: number) {
  const result: Array<string> = []
  const length = colorOptions.length
  for (let i = 0; i < size; i++) {
    const colorOption = colorOptions[generatorIntegerRandom(length)]
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    result.push(colors[colorOption].base)
  }

  return result
}


