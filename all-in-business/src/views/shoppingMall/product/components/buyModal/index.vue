<template>
  <v-dialog
    :value="visible"
    max-width="500"
    @click:outside="onClose"
  >
    <v-card>

      <v-card-title class="headline justify-center">
        <v-icon>
          fas fa-cart-arrow-down
        </v-icon>
      </v-card-title>

      <v-card-title>
        Success to save in cart. Would like to go cart?
      </v-card-title>

      <v-card-actions
        class="justify-center"
      >
        <v-btn
          color="green darken-1"
          large
          text
          @click="onClose"
        >
          Move to cart
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { gql } from 'apollo-boost'

@Component({
  name: 'ShoppingMallProductModal',
  components: {
  }
})
export default class extends Vue {
  @Prop() private visible !: boolean

  /** Close the modal */
  onClose() {
    this.$emit('onClose', false)
  }
}
</script>

<style scoped>
</style>
