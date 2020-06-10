<template>
  <div
    style="width: 10000px height: 10000px"
  >
    <business-restaurnat-tables-setting />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessRestaurnatTablesSetting from './components/Setting/index.vue'

@Component({
  name: 'BusinessRestaurnatTables',
  components: {
    BusinessRestaurnatTablesSetting
  }

})
export default class extends Vue {
}
</script>

<style scoped>
</style>
