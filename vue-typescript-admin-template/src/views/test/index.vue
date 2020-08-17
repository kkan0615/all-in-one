<template>
  <div>
    test
    <DraggableTreeView
      :list="fakeDraggableTreeViews"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DraggableTreeView from '@/components/DraggableTreeView/index.vue'
import { fakeDraggableTreeViews } from '@/components/DraggableTreeView/fakeData'

@Component({
  name: 'Test',
  components: {
    DraggableTreeView
  }
})
export default class Test extends Vue {
  public fakeDraggableTreeViews = fakeDraggableTreeViews

  created () {
    console.log(this.fakeDraggableTreeViews)
  }
}
</script>
