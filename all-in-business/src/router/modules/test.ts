import { RouteConfig } from 'vue-router'
const test: RouteConfig[] = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/layouts/shoppingMall-layout/index.vue'),
    children: [
      {
        path: 'testChild',
        name: 'TestChild',
        component: () => import('../../views/test/testChild.vue')
      }
    ]
  }
]

export default test
