export interface MenuInterface {
  title: string,
  icon: string,
  link : string
  children ?: Array<MenuInterface>
}
