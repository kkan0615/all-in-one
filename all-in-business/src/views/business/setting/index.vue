<template>
  <section>
    <v-row>
      <v-col
        cols="3"
        xl="3"
        lg="3"
        md="3"
        sm="3"
        xs="3"
      >
        <business-setting-menu />
      </v-col>
      <v-col
        cols="9"
        xl="9"
        lg="9"
        md="9"
        sm="9"
        xs="9"
      >
        <design-setting />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessSettingMenu from './components/menu/index.vue'
import DesignSetting from './components/designSetting.vue'

@Component({
  name: 'BusinessSetting',
  components: {
    BusinessSettingMenu,
    DesignSetting
  }
})
export default class extends Vue {
}
</script>

<style scoped>
</style>
