<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        cols="8"
        lg="8"
        xl="8"
        md="12"
        sm="12"
        xs="12"
      >
        <v-text-field
          class="mx-4"
          label="search"
          append-icon="search"
          @click:append="clickSearchIconEvent"
        />
      </v-col>
      <v-col
        cols="4"
        lg="4"
        xl="4"
        md="12"
        sm="12"
        xs="12"
      >
        <v-select
          class="mx-4"
          :items="sortOption"
          item-text="value"
          item-value="code"
          label="Sort"
          outlined
          @change="onChangeSort"
        />
      </v-col>
    </v-row>
    <!-- Control for product list(Test-test) -->
    <v-row
      class="my-4"
      align="center"
      justify="center"
      no-gutters
      dense
    >
      <v-col
        align="center"
        justify="center"
        cols="4"
        lg="4"
        xl="4"
        md="4"
        sm="4"
        xs="4"
      >
        <v-btn @click="onClickAddProduct">
          Add Product
        </v-btn>
      </v-col>
      <v-col
        align="center"
        justify="center"
        cols="4"
        lg="4"
        xl="4"
        md="4"
        sm="4"
        xs="4"
      >
        <v-btn @click="loading = !loading">
          loading
        </v-btn>
      </v-col>
      <v-col
        align="center"
        justify="center"
        cols="4"
        lg="4"
        xl="4"
        md="4"
        sm="4"
        xs="4"
      >
        <v-btn @click="onClickPopProduct">
          Remove
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="(product) in products"
        :key="product.id"
        lg="3"
        xl="3"
        md="6"
        sm="12"
        xs="12"
      >
        <ProductCard
          :product="product"
        />
      </v-col>
    </v-row>
    <div class="text-center my-4">
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="green"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import ProductCard from '../components/productCard.vue'
import { Products, createProduct, renewProducts } from '@/dataInterface/Product/productInterface'
import { filterProductImages } from '@/dataInterface/Product/productImageInterface'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ShoppingList',
  components: {
    ProductCard
  }
})
export default class extends Vue {
  private products: Array<any> = []
  private sortOption = [{ code: 0, value: 'ASC' }, { code: 1, value: 'DESC' }, { code: 2, value: 'Rating' }]
  private loading = false

  private AddIndex = 0 // (Test-test)

  clickSearchIconEvent() {
    console.log('clickSearchIconEvent')
  }

  // (Test-test)
  onClickAddProduct() {
    const lastIndex = this.products.length
    const product = createProduct((this.products.length > 0 ? this.products[lastIndex - 1].id : 0) + 1)
    const images = [
      { id: 0, productId: product.id, path: 'https://static.hubzum.zumst.com/hubzum/2018/05/02/14/37ebbc8c3c6d4b4bbbaaab22693d2953_780x0c.jpg', name: 'none' },
      { id: 1, productId: product.id, path: 'https://lh3.googleusercontent.com/proxy/Gn9oZn8rSgeygjHzzUa9v8CEk8RCJmOHcYdYaV767qAcKq8zSjI0_AVtffF2KXdE82VzVW-mCCZfqjWTWoHAA1FGyh3BMd5lbdlM8wyDCsY', name: 'none' },
      { id: 2, productId: product.id, path: 'https://cdn.imweb.me/upload/S201906191c3595f104fd6/4de7ca2e370b5.jpeg', name: 'none' },
      { id: 3, productId: product.id, path: 'https://lh3.googleusercontent.com/proxy/ONv9b26_6SpiamYjG7kdzI1-N_cHVNo9_B3HAxJ1f-Ocw3wpRnEJwsBWAPHPFIaqCJNU6zBnWX7SavRuiUEVCgto27A3rO3xpcgqqurnAy-lq-md7AU', name: 'none' }
    ]
    product.images = images

    this.products.push(product)
    renewProducts(this.products)
  }

  onClickPopProduct() {
    if (this.products.length < 1) {
      return
    }

    this.products.pop()
  }

  onChangeSort(value: any) {
    console.log(value)
  }

  created() {
    const newProducts = Products.map(e => {
      e.images = filterProductImages(e.id)
      if (e.images.length === 0) {
        e.images = [
          { id: 0, productId: e.id, path: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAy9WZ2.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f', name: 'none' }
        ]
      }
      // e.price = e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      // if (e.salePrice) {
      //   e.salePrice = e.salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      // }
      return e
    })
    renewProducts(newProducts)
    this.products = JSON.parse(JSON.stringify(Products))
  }

  updated() {
    console.log('test')
  }
}
</script>

<style scoped>

</style>
