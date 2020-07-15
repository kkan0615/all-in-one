import { fakeDataTabs, fakeDataTabsGenerator } from '../../data/menu';

export const tabsResovler = {
  Query: {
    allTabs: () => {
      if (fakeDataTabs.length < 0) {
        fakeDataTabsGenerator()
      }
      return fakeDataTabs
    }
  },
  Mutation: {
    addTabs: (root: any, args: any) => addTabsFn(args)
  }
}

const addTabsFn = (args: any) => {
  fakeDataTabs.push(args)
  return args
}