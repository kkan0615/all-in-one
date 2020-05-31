export interface MenuInterface {
  id: number,
  icon: string,
  name: string,
  link: string,
  level: number,
  groupCode: number,
  parentCode: number | null
}
