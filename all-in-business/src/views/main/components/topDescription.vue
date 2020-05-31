<template>
  <div>
    <transition name="slide-fade">
      <p v-show="pageLoaded" class="text-center display-1 px-6">{{ message }}</p>
    </transition>
    <transition name="slide-fade">
      <p v-show="pageLoaded" class="text-center headline px-6">{{ message2 }}</p>
    </transition>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { gql } from 'apollo-boost'

@Component({
  name: 'TopDescription'
  // components: {
  //   AppBar,
  //   Footer,
  //   NavBar
  // }
})
export default class extends Vue {
  private message = 'Welcome to Youngjin Kwak Template collection'
  private message2 = 'In here You can see Samples'
  @Prop() pageLoaded! :boolean //  To make work transition when page is laded
}
</script>

<style lang="scss" scoped>
</style>
