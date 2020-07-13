import { commonCodeList, filterCommonCode } from '../../data/commonCode';

export const commonCodeResovler = {
  Query: {
    allCommonCode: () => {
      return commonCodeList
    },
    findCommonCodeListByCodes: (root: any, { majorCode, minorCode }: any) => {
      return filterCommonCode(majorCode, minorCode)
    }
  },
  Mutation: {
    addCommonCode: (root: any, args: any) => addCommonCodeFn
  }
}

const addCommonCodeFn = (args: any) => {
  commonCodeList.push(args)
  return args
}