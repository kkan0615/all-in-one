import { RouteConfig } from 'vue-router'
const erpTemplateRoutes: RouteConfig[] = [
  {
    path: '/template',
    name: 'Template',
    component: () => import('@/layouts/commonPage.vue'),
    children: [
      {
        path: 'ImageForm',
        name: 'ImageForm',
        component: () => import('@/views/erpTemplate/imageForm/index.vue')
      }
    ]
  }
]

export default erpTemplateRoutes
