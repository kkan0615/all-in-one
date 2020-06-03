export interface DetailInterface {
  id: number,
  title: string,
  description: string,
  link: string,
  backgroundImage: string | null,
  icon: string | null,
  color: string | null
}

// export class MainDetail implements DetailInterface {
//   private title: string
//   private description: string
//   private link: string
//   private color: string

//   constructor(title:string, description:string, link:string, color:string) {
//     this.title = title
//     this.description = description
//     this.link = link
//     this.color = color
//   }
// }

export const details: Array<DetailInterface> = [
  {
    id: 0,
    title: 'Shopping template',
    description: 'This is Shopping template',
    backgroundImage: null,
    link: '/shoppingMall',
    icon: null,
    color: '#416EB6'
  },
  {
    id: 1,
    title: 'Bussiness Template',
    description: 'This is Bussiness template',
    backgroundImage: null,
    link: '/business',
    icon: null,
    color: '#416EB6'
  },
  {
    id: 2,
    title: 'Blog template',
    description: 'This is Blog template',
    backgroundImage: null,
    link: '/',
    icon: null,
    color: '#416EB6'
  },
  {
    id: 3,
    title: 'chart template',
    description: 'This is chart template',
    backgroundImage: null,
    link: '/',
    icon: null,
    color: '#416EB6'
  },
  {
    id: 4,
    title: 'commingSoon template',
    description: 'This is commingSoon template',
    backgroundImage: null,
    link: '/',
    icon: null,
    color: '#416EB6'
  }

]
