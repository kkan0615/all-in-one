<template>
  <div>
    <v-row>
      <v-col
        cols="4"
        xl="4"
        lg="4"
        md="12"
        sm="12"
        xs="12"
      >
        test
      </v-col>
      <v-col
        cols="8"
        xl="8"
        lg="8"
        md="12"
        sm="12"
        xs="12"
      >
        <v-card>
          test
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ProductInterface } from '@/dataInterface/Product/productInterface'
// import { gql } from 'apollo-boost'

@Component({
  name: 'ShoppingMallProductContent',
  components: {
  }
})
export default class extends Vue {
  private product !: ProductInterface

  // constructor() {
  //   super()
  // }
}
</script>

<style scoped>
</style>
