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
        component: () => import('@/views/shoppingMall/indexPage/index.vue')
      },
      {
        path: 'list',
        name: 'ShoppingMallList',
        component: () => import('@/views/shoppingMall/list/index.vue')
      },
      {
        path: 'product/:productId',
        name: 'ShoppingMallProduct',
        component: () => import('@/views/shoppingMall/product/index.vue')
      }
    ]
  }
]

export default shoppingMall
