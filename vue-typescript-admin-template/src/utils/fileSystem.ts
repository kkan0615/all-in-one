// layout, view component dynamic imports
const layoutFiles = require.context('../layouts', true, /(index.vue)$/)
const viewFiles = require.context('../views', true, /(index.vue)$/)

export const viewsFiles = viewFiles.keys().reduce((views: { [viewName: string]: Function }, viewPath) => {
  // e.g. 1: viewPath(./login/index.vue) => ['.', 'login', 'index.vue']
  // e.g. 2: viewPath(./login/auth/index.vue) => ['.', 'login', 'auth', 'index.vue']
  const splitViewPath = viewPath.split('/')
  // e.g. 1:  ['.', 'login', 'index.vue'] => '/login'
  // e.g. 2: ['.', 'login', 'auth', 'index.vue'] => '/login/auth'
  const viewName = splitViewPath.slice(1, splitViewPath.length - 1).join('/')
  const value = viewFiles(viewPath)

  views[viewName.toLowerCase()] = value.default
  return views
}, {})

const layoutsFiles = layoutFiles.keys().reduce((layouts: { [layoutName: string]: Function }, layoutPath) => {
  const layoutName = layoutPath.split('/').slice(-2, -1)[0]
  const value = layoutFiles(layoutPath)

  layouts[layoutName] = value.default
  return layouts
}, {})
