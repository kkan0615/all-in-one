import { RouteConfig } from 'vue-router'
const shoppingMall: RouteConfig[] = [
  {
    path: '/shoppingMall',
    name: 'shoppingLayout',
    component: () => import('@/layouts/shoppingMall-layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'ShoppingMallIndex',
        component: () => import('@/views/shoppingMall/indexPage/index.vue'),
        meta: { icon: '', hidden: true }
      },
      {
        path: 'list',
        name: 'ShoppingMallList',
        component: () => import('@/views/shoppingMall/list/index.vue'),
        meta: { icon: '', hidden: false }
      },
      {
        path: 'product/:productId',
        name: 'ShoppingMallProduct',
        component: () => import('@/views/shoppingMall/product/index.vue'),
        meta: { icon: '', hidden: true }
      }
    ]
  }
]

export default shoppingMall
