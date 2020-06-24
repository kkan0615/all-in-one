<template>
  <!-- <div
    style="display: flex"
  >
    <div
      style="max-width: 50%"
    >
      <resizeable-div />
    </div>
    <div
      style="max-width: 50%"
    >
      <resizeable-div />
    </div>
    <div
      style="max-width: 50%"
    >
      <resizeable-div />
    </div>
  </div> -->
  <v-row>

    <resizeable-div
      :title="'test1'"
    />

    <resizeable-div
      :title="'test2'"
    />

    <resizeable-div
      :title="'test3'"
    />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ResizeableDiv from '@/components/resizeableDiv/index.vue'

@Component({
  name: 'moveableGrid',
  components: {
    ResizeableDiv
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
