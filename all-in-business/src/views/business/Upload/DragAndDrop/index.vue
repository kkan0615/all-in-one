<template>
  <dragdrop-upload-box />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DragdropUploadBox from '@/components/DragdropUpload/index.vue'

@Component({
  name: 'DragAndDropUpload',
  components: {
    DragdropUploadBox
  }
})
export default class extends Vue {

}
</script>
