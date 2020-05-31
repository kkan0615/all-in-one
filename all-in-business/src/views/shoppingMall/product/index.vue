<template>
  <div>
    <shopping-mall-product-modal
      :visible="buyModalvisible"
      @onClose="onCloseBuyModal"
    />
    <v-row>
      <v-col
        cols="6"
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <shopping-mall-product-images
          :images="product.images"
        />
      </v-col>
      <v-col
        cols="6"
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <shopping-mall-product-detail
          :product="product"
          @onClickCart="onClickCart"
        />
      </v-col>
    </v-row>
    <shopping-mall-product-content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Products, ProductInterface } from '@/dataInterface/Product/productInterface'
import ShoppingMallProductImages from './components/images/index.vue'
import ShoppingMallProductDetail from './components/detail/index.vue'
import ShoppingMallProductModal from './components/buyModal/index.vue'
import ShoppingMallProductContent from './components/content/index.vue'
// import { gql } from 'apollo-boost'

@Component({
  name: 'ShoppingMallProduct',
  components: {
    ShoppingMallProductImages,
    ShoppingMallProductDetail,
    ShoppingMallProductModal,
    ShoppingMallProductContent
  }
})
export default class extends Vue {
  private product !: ProductInterface
  private buyModalvisible !: boolean

  constructor() {
    super()
    this.buyModalvisible = false
  }

  onClickCart() {
    this.buyModalvisible = true
  }

  onCloseBuyModal() {
    this.buyModalvisible = false
  }

  created() {
    const exProduct = Products.find(e => e.id === parseInt(this.$route.params.productId))
    if (!exProduct) {
      this.$router.go(-1)
    } else {
      this.product = exProduct
    }
    console.log(this.product)
  }
}
</script>

<style scoped>
</style>
