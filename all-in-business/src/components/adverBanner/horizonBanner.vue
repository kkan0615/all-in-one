<template>
  <div>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
        <v-img
          :height="100"
          :src="'https://cdn.mmos.com/wp-content/uploads/2020/02/blue-protcol-boss-anime-art-banner.jpg'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'HorizonBanner',
  components: {
  }
})
export default class extends Vue {
}

</script>

<style scoped>

</style>
