<template>
  <v-row>
    <resizeable-div
      v-for="(resizeableDiv, i) in divArray"
      :key="i"
      :title="resizeableDiv.title"
      :width="resizeableDiv.width"
      :height="resizeableDiv.height"
    />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ResizeableDiv from '@/components/resizeableDiv/index.vue'

// Fake data
import { fakeDivArray } from './data/fakeData'

@Component({
  name: 'moveableGrid',
  components: {
    ResizeableDiv
  }
})
export default class extends Vue {
  private divArray !: Array<any>

  constructor() {
    super()
    this.divArray = []
  }

  created() {
    this.divArray = JSON.parse(JSON.stringify(fakeDivArray))
  }
}
</script>

<style lang="scss" scoped>

</style>
