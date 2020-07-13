/**
 * Exmaple
 * id: 0
 * majorCode: 'size'
 * majorCodeName: '사이즈'
 * minorCode: 'size01'
 * minorCodeName: '의류 사이즈'
 * value: 'M'
 * searchKey1: ''
 * searchKey2: ';
 */

export interface CommonCodeInterface {
  id: number
  majorCode: string
  majorCodeName: string
  minorCode: string
  minorCodeName: string
  value: string
  searchKey1: string
  searchKey2: string
}

export const commonCodeList: Array<CommonCodeInterface> = [
  {
    id: 0,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: '옷',
    searchKey1: '',
    searchKey2: '',
    value: 'S'
  },
  {
    id: 1,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: '옷',
    searchKey1: '',
    searchKey2: '',
    value: 'S'
  },
  {
    id: 2,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: '옷',
    searchKey1: '',
    searchKey2: '',
    value: 'M'
  },
  {
    id: 3,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: '옷',
    searchKey1: '',
    searchKey2: '',
    value: 'L'
  },
  {
    id: 4,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: '옷',
    searchKey1: '',
    searchKey2: '',
    value: 'XL'
  },
  {
    id: 5,
    majorCode: 'color',
    majorCodeName: '색깔',
    minorCode: '',
    minorCodeName: '',
    searchKey1: 'red',
    searchKey2: '',
    value: 'f70000'
  },
  {
    id: 6,
    majorCode: 'color',
    majorCodeName: '색깔',
    minorCode: '',
    minorCodeName: '검정',
    searchKey1: 'black',
    searchKey2: '',
    value: '000000'
  },
  {
    id: 7,
    majorCode: 'color',
    majorCodeName: '색깔',
    minorCode: '',
    minorCodeName: '회색',
    searchKey1: 'grey',
    searchKey2: '',
    value: 'aaaaaa'
  }
]

export function filterCommonCode(majorCode: string, minorCode: string) {
  let result: Array<CommonCodeInterface> = []
  result = commonCodeList.filter((e) => {
    if (e.majorCode !== majorCode) {
      return
    }

    if (e.minorCode !== minorCode) {
      return
    }

    return e
  })

  return result
}
