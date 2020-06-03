<template>
  <v-card>
    <v-card-title
      class="text-center"
    >
      Setting playground
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          :cols="6"
        >
          <v-switch
            v-model="dark"
            label="DarkMode"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BusinessMusicListSetting'
})
export default class extends Vue {
  private dark = false
}
</script>

<style lang="scss" scoped>
</style>
