export interface MetaBasicInterface {
  title: string
  icon: string
  isRequireLogin: boolean
  keepAlive: boolean
}

export interface RouterBasicInterface {
  path: string
  name: string
  component: Function
  children: Array<RouterBasicInterface> | null
  meta: Array<MetaBasicInterface>
}
