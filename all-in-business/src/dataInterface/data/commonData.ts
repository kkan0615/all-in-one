import { CommonCodeInterface } from '@/dataInterface/commonCode'
// 12
export const commonCodeList: Array<CommonCodeInterface> = [
  {
    id: 0,
    majorCode: 'size',
    majorCodeName: 'size',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'SS'
  },
  {
    id: 1,
    majorCode: 'size',
    majorCodeName: 'size',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'S'
  },
  {
    id: 2,
    majorCode: 'size',
    majorCodeName: 'size',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'M'
  },
  {
    id: 3,
    majorCode: 'size',
    majorCodeName: 'size',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'L'
  },
  {
    id: 4,
    majorCode: 'size',
    majorCodeName: 'size',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'XL'
  },
  {
    id: 12,
    majorCode: 'size',
    majorCodeName: '사이즈',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'XXL'
  },
  {
    id: 5,
    majorCode: 'color',
    majorCodeName: 'color',
    minorCode: 'red',
    minorCodeName: 'red',
    searchKey1: '',
    searchKey2: '',
    value: 'f70000'
  },
  {
    id: 6,
    majorCode: 'color',
    majorCodeName: 'color',
    minorCode: 'black',
    minorCodeName: 'black',
    searchKey1: '',
    searchKey2: '',
    value: '000000'
  },
  {
    id: 7,
    majorCode: 'color',
    majorCodeName: 'color',
    minorCode: 'grey',
    minorCodeName: 'grey',
    searchKey1: '',
    searchKey2: '',
    value: 'aaaaaa'
  },
  {
    id: 8,
    majorCode: 'kinds',
    majorCodeName: 'kinds',
    minorCode: 'clothes',
    minorCodeName: 'clothes',
    searchKey1: '',
    searchKey2: '',
    value: 'aaaaaa'
  },
  {
    id: 9,
    majorCode: 'kinds',
    majorCodeName: 'kinds',
    minorCode: 'shoose',
    minorCodeName: 'shoose',
    searchKey1: '',
    searchKey2: '',
    value: 'aaaaaa'
  },
  {
    id: 10,
    majorCode: 'subKinds',
    majorCodeName: 'subKinds',
    minorCode: 'hoodie',
    minorCodeName: 'hoodie',
    searchKey1: '',
    searchKey2: '',
    value: 'hoodie'
  },
  {
    id: 11,
    majorCode: 'subKinds',
    majorCodeName: 'subKinds',
    minorCode: 'basketballShoose',
    minorCodeName: 'basketballShoose',
    searchKey1: '',
    searchKey2: '',
    value: 'basketballShoose'
  }
]

export function filterCommonCode(majorCode: string, minorCode: string | null) {
  let result: Array<CommonCodeInterface> = []
  result = commonCodeList.filter((e) => {
    if (e.majorCode !== majorCode) {
      return
    }
    if (minorCode) {
      if (e.minorCode !== minorCode) {
        return
      }
    }

    return e
  })

  return result
}

export function findCommonCode(majorCode: string, minorCode: string) {
  // eslint-disable-next-line prefer-const
  let result: any = commonCodeList.find((e) => {
    if (e.majorCode !== majorCode) {
      return
    }

    if (e.majorCode !== minorCode) {
      return
    }

    return e
  })

  return result
}
