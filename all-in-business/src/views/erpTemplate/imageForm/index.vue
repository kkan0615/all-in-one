<template>
  <div>
    {{ message }}
    <v-select :items="items" label="Outlined style" dense outlined />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { AppBar, Footer } from './components'
// import { NavBar } from './components/bars'
// import { gql } from 'apollo-boost'

@Component({
  name: 'ImageTemplate'
  // components: {
  //   AppBar,
  //   Footer,
  //   NavBar
  // }
})
export default class extends Vue {
  private message = 'message'
  private items = ['test', 'test2']
}
</script>

<style scoped>
</style>
