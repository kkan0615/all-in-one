<template>
  <div class="mx-6">
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        sm="12"
        md="11"
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
import { Component, Vue } from 'vue-property-decorator'
// import { gql } from 'apollo-boost'

@Component({
  name: 'BottomBanner'
  // components: {
  //   AppBar,
  //   Footer,
  //   NavBar
  // }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
