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
        <BusinessSettingMenu />
      </v-col>
      <v-col
        cols="9"
        xl="9"
        lg="9"
        md="9"
        sm="9"
        xs="9"
      >
        <router-view />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessSettingMenu from './components/menu/index.vue'

@Component({
  name: 'BusinessSetting',
  components: {
    BusinessSettingMenu
  }
})
export default class extends Vue {
}
</script>

<style scoped>
</style>
