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
