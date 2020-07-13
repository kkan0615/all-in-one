/**
 * Collection of tags 태그들의 집합들이 들어갈 공간입니다.
 */
/**
 * Author: Youngjin Kwak
 * CreatedAt: 02-23-2020
 * LastUpdatedAT: 03-18-2020
 * Description: ''
 */

// import { KindsInterface, ProductInterface } from '@/data/product' // Open when you need

/** *******
 * To do list
 *
 *
 *********/
/**
  * Interface for Tabs
  * tab: tab name (ttile)
  * content: description of tab
  */
export interface TabsInterface {
  id: number
  icon: string
  name: string
  content: string
  tags: Array<TagsInterface>
}

/**
 * Interface for Tags
 */
export interface TagsInterface {
  id: number
  icon: string
  link: string
  name: string // KindsInterface's name
  // link: string
  subTags: Array<SubTagsInterface>
}

/**
 * Interface for subTags
 */
export interface SubTagsInterface {
  id: number
  icon: string
  name: string // ProductInterface's name
  link: string
}

export const fakeDataTabs: Array<TabsInterface> = [
  {
    id: 0, name: 'ErpTemplate', icon: 'mdi-magnify', content: 'Template For Erp',
    tags: [
      { id: 0, name: 'ImageForm', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 0, icon: 'mdi-magnify', name: 'ImageForm', link: 'imageForm' }, { id: 1, icon: 'mdi-magnify', name: 'sub2', link: '/' }, { id: 2, icon: 'mdi-magnify', name: 'sub1', link: '/' }] },
      { id: 1, name: 'tag2', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 3, icon: 'mdi-magnify', name: 'sub1', link: '/' }, { id: 4, icon: 'mdi-magnify', name: 'sub3', link: '/' }] },
      { id: 2, name: 'tag3', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 5, icon: 'mdi-magnify', name: 'sub1', link: '/' }, { id: 6, icon: 'mdi-magnify', name: 'sub2', link: '/' }] },
      { id: 3, name: 'tag4', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 7, icon: 'mdi-magnify', name: 'sub1', link: '/' }] }
    ]
  },
  {
    id: 2, name: 'shopping', icon: 'mdi-magnify', content: 'Tab 2 Content',
    tags: [
      { id: 4, name: 'list', icon: 'mdi-magnify', link: 'list', subTags: [{ id: 8, icon: 'mdi-magnify', name: 'shopping', link: 'shopping' }, { id: 12, icon: 'mdi-magnify', name: 'card', link: '/' }, { id: 15, icon: 'mdi-magnify', name: 'sub1', link: '/' }] },
      { id: 5, name: 'tag2', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 9, icon: 'mdi-magnify', name: 'sub1', link: '/' }, { id: 13, icon: 'mdi-magnify', name: 'sub3', link: '/' }] },
      { id: 6, name: 'tag3', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 10, icon: 'mdi-magnify', name: 'sub1', link: '/' }, { id: 14, icon: 'mdi-magnify', name: 'sub2', link: '/' }] },
      { id: 7, name: 'tag4', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 11, icon: 'mdi-magnify', name: 'sub1', link: '/' }] }
    ]
  },
  {
    id: 3, name: 'dashboard', icon: 'mdi-magnify', content: 'Tab 2 Content',
    tags: [
      { id: 4, name: 'dashboard', icon: 'mdi-magnify', link: 'imageForm', subTags: [{ id: 8, icon: 'mdi-magnify', name: 'sub1', link: '/' }, { id: 12, icon: 'mdi-magnify', name: 'sub2', link: '/' }] },

    ]
  }
]

export function fakeDataTabsGenerator() {
  let countOfSubTags = 0
  let countOfTags = 0;
  for (let i = 0; i < 6; i++) {
    const tab: TabsInterface = { id: i, name: `tab ${i}`, icon: 'mdi-magnify', content: `${i} tab content`, tags: [] }
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      const tag: TagsInterface = { id: countOfTags++, icon: 'icon', name: `subTag ${countOfSubTags}`, link: 'imageForm', subTags: [] }
      for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
        const subTag: SubTagsInterface = { id: countOfSubTags++, icon: 'mdi-magnify', name: `subTag ${countOfSubTags}`, link: '/' }
        tag.subTags.push(subTag)
      }
      tab.tags.push(tag)
    }
    fakeDataTabs.push(tab)
  }
  console.log(fakeDataTabs);
}
