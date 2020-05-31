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
  name: string // KindsInterface's name
  // link: string
  subTags: Array<SubTagsInterface>
}

/**
 * Interface for subTags
 */
export interface SubTagsInterface {
  id: number
  name: string // ProductInterface's name
  // link: string
}
