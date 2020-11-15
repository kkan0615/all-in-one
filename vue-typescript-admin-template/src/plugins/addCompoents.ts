// import _Vue from 'vue'
//
// export function addComponentsPlugin (Vue: typeof _Vue): void {
//   const requireComponent = require.context(
//     // 컴포넌트들이 있는 폴더
//     '@/components/Input',
//     // 하위 폴더까지 포함할 지 여부
//     true,
//     // 기본 컴포넌트를 찾는데 사용할 정규표현식
//     /\.vue$/
//   )
//
//   console.log('requireComponent', requireComponent.keys())
//
//   requireComponent.keys().forEach(fileName => {
//     // 컴포넌트 설정 가져오기
//     console.log(fileName)
//     const componentConfig = requireComponent(fileName)
//     console.log(componentConfig.default)
//
//     /* Add components in Input globally */
//     Vue.component(
//       // fileName example: ./NumberField/index.vue
//       'NumberFiledBox',
//       // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
//       componentConfig.default || componentConfig
//     )
//   })
// }
//
// export default addComponentsPlugin
