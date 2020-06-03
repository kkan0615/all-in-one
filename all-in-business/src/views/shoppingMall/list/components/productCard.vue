<template>
  <div>
    <confirm
      :visible="visible"
      @onClose="(status) => visible = status "
    />
    <v-card
      :elevation="0"
      @mouseover="showArrow = true"
      @mouseleave="showArrow = false"
    >
      <div>
        <v-carousel v-if="product.images.length > 2" height="250" hide-delimiters :show-arrows="showArrow">
          <v-carousel-item
            v-for="(image, i) in product.images"
            :key="i"
            :src="image.path"
            :cycle="showArrow"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="moveToProduct"
          />
        </v-carousel>
        <v-img v-else height="250" :src="product.images[0].path" @click="moveToProduct" />
      </div>
      <v-card-title @click="moveToProduct">
        {{ product.title }}
        <v-spacer />
        <v-btn icon @click.stop="onClickHeartIcon">
          <!-- <v-icon v-if="product.hot" color="red">mdi-heart</v-icon> -->
          <!-- <v-icon v-else>mdi-heart</v-icon> -->
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-right">
        <div class="text-right" :style="product.salePrice ? 'text-decoration: line-through;' : ''">{{ currencyFormatter(product.price) }} {{ expressionCurrency }}</div>
        <div>
          <div class="title text-right" style="color: red">{{ currencyFormatter(product.salePrice) }} {{ expressionCurrency }}</div>
        </div>
        <v-rating
          v-model="product.rating"
          :readonly="true"
          :length="5"
          background-color="indigo lighten-3"
          color="indigo"
          size="15"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          icon
          @click="onClickToCart"
        >
          <v-icon>shopping_cart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-card-text>
            Tags
            <productChip :chips="product.tags" />
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>

</template>

<script lang="ts">
import productChip from './productChip.vue'
import { ProductInterface } from '@/dataInterface/Product/productInterface'
import { SettingModule } from '@/store/modules/setting'
import Confirm from '@/components/confirm/index.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { currencyFormatter } from '@/utils/formaterUtils'

@Component({
  name: 'ProductCard',
  components: {
    productChip,
    Confirm
  }
})
export default class extends Vue {
  @Prop() private product!: ProductInterface
  private show = false
  private showArrow = false
  private expressionCurrency = SettingModule.expressionCurrency
  private visible = false

  onClickToCart() {
    this.visible = true
  }

  onClickHeartIcon() {
    console.log('onClickHeartIcon')
  }

  currencyFormatter(price: number) {
    return currencyFormatter('en', price)
  }

  async moveToProduct() {
    const path = `/shoppingMall/product/${this.product.id}`
    /** Error Fix: https://stackoverflow.com/questions/57837758/navigationduplicated-navigating-to-current-location-search-is-not-allowed  */
    if (this.$route.path !== path) {
      await this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
