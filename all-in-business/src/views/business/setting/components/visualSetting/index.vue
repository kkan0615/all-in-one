<template>
  <v-card
    :dark="true"
  >
    <v-card-text>
      <v-switch
        v-model="darkMode"
        :label="'Dark mode'"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BusinessSetting'

})
export default class extends Vue {
  private darkMode = true
}
</script>

<style scoped>
</style>
