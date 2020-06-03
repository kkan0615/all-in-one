import { MenuInterface } from './MenuInterface'

export const mainMenus: Array<MenuInterface> = [
  // Groupd 0
  {
    id: 0,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Introduction',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 1,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'About me',
    level: 1,
    link: '/',
    parentCode: 0
  },
  {
    id: 2,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Sub Test',
    level: 1,
    link: '/',
    parentCode: 0
  },
  {
    id: 3,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Sub Test',
    level: 1,
    link: '/',
    parentCode: 0
  },
  {
    id: 4,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'profile',
    level: 2,
    link: '/',
    parentCode: 1
  },
  {
    id: 5,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'portfolio',
    level: 2,
    link: '/',
    parentCode: 1
  },
  // Groupd 1
  {
    id: 6,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'Setting',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 7,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'Color',
    level: 1,
    link: '/',
    parentCode: 6
  },
  {
    id: 8,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'Language',
    level: 1,
    link: '/',
    parentCode: 6
  },
  {
    id: 9,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'Sub Test',
    level: 1,
    link: '/',
    parentCode: 6
  }
]

export const shoppingMenus: Array<MenuInterface> = [
  {
    id: 0,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'List',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 1,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'Test1',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 2,
    groupCode: 2,
    icon: 'fa-ambulance',
    name: 'Test2',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 3,
    groupCode: 3,
    icon: 'fa-ambulance',
    name: 'Test3',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 4,
    groupCode: 4,
    icon: 'fa-ambulance',
    name: 'Test4',
    level: 0,
    link: '/',
    parentCode: null
  },
  {
    id: 5,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Item List-v1',
    level: 1,
    link: '/shoppingMall/list',
    parentCode: 0
  },
  {
    id: 6,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Item List-v2',
    level: 1,
    link: '/',
    parentCode: 0
  },
  {
    id: 7,
    groupCode: 0,
    icon: 'fa-ambulance',
    name: 'Item List-v3',
    level: 1,
    link: '/',
    parentCode: 0
  },
  {
    id: 8,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'SubTest8',
    level: 1,
    link: '/',
    parentCode: 1
  },
  {
    id: 9,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'SubTest9',
    level: 1,
    link: '/',
    parentCode: 1
  },
  {
    id: 10,
    groupCode: 1,
    icon: 'fa-ambulance',
    name: 'SubTest10',
    level: 1,
    link: '/',
    parentCode: 1
  }
]

export function createMenu(arr:Array<MenuInterface>, level:number, parentCode:number | null) {
  const result: Array<any> = []
  const rootlevelArr = arr.filter(e => e.level === level && e.parentCode === parentCode)
  for (let i = 0; i < rootlevelArr.length; i++) {
    const rootLevel = rootlevelArr[i]
    const subMenus = createMenu(arr, level + 1, rootLevel.id)
    const menu = {
      id: rootLevel.id,
      name: rootLevel.name,
      icon: rootLevel.icon,
      link: rootLevel.link,
      parentCode: rootLevel.parentCode,
      groupCode: rootLevel.groupCode,
      subMenus: subMenus
    }
    result.push(menu)
  }
  return result
}
