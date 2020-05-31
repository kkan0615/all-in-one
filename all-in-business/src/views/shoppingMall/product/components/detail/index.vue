<template>
  <v-card
    :height="800"
  >
    <div class="pa-8">
      <p class="display-2">{{ product.title }}</p>
      <v-row>
        <v-col
          cols="3"
          xl="3"
          lg="3"
          md="3"
          sm="4"
          xs="4"
        >
          <v-rating
            v-model="product.rating"
            :readonly="true"
            :length="5"
            background-color="indigo lighten-3"
            color="indigo"
            :dense="true"
            size="25"
          />
        </v-col>
        <v-col
          cols="3"
          xl="3"
          lg="3"
          md="3"
          sm="3"
          xs="3"
        >
          <div class="pa-1">
            Reviews: {{ numberFormatter(reviewCount) }}
          </div>
        </v-col>
      </v-row>
      <v-card-text class="text-right">
        <div class="text-right" :style="product.salePrice ? 'text-decoration: line-through;' : ''">{{ currencyFormatter(product.price) }} {{ expressionCurrency }}</div>
        <div>
          <div class="title text-right" style="color: red">
            <p class="display-1">
              {{ currencyFormatter(product.salePrice) }} {{ expressionCurrency }}
            </p>
          </div>
        </div>
      </v-card-text>
      <additional-description
        v-for="(item, i) in addtionalDescriptions"
        :key="i"
        :description="item"
      />
      <v-row>
        <v-col
          cols="6"
          xl="5"
          lg="5"
          md="5"
          sm="12"
          xs="12"
        >
          <v-select
            v-model="color"
            :items="product.colors"
            item-text="minorCode"
            item-value="value"
          />
        </v-col>
        <v-col
          cols="4"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12"
        >
          <v-select
            v-model="size"
            :items="product.sizes"
            item-text="value"
            item-value="value"
          />
        </v-col>
        <!-- <v-btn icon>
              <v-icon
              >
                fas fa-angle-up
              </v-icon>
            </v-btn> -->
        <v-col
          cols="3"
          xl="3"
          lg="3"
          md="3"
          sm="12"
          xs="12"
        >
          <v-row>
            <v-col
              cols="4"
              xl="4"
              lg="4"
              md="4"
              sm="12"
              xs="12"
            >
              <v-btn
                icon
                @click="onClickQuantityChange(-1)"
              >
                <v-icon>
                  fas fa-angle-left
                </v-icon>
              </v-btn>
            </v-col>
            <v-col
              cols="4"
              xl="4"
              lg="4"
              md="4"
              sm="12"
              xs="12"
            >
              <v-text-field
                :value.sync="quantity"
                dense
                :type="'number'"
              />
            </v-col>
            <v-col
              cols="4"
              xl="4"
              lg="4"
              md="34"
              sm="12"
              xs="12"
            >
              <v-btn
                icon
                @click="onClickQuantityChange(1)"
              >
                <v-icon>
                  fas fa-angle-right
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
      <v-btn
        large
        block
        dark
        :color="'#65BF73'"
      >
        Buy now
      </v-btn>
      <v-row>
        <v-col
          cols="6"
          xl="8"
          lg="8"
          md="8"
          sm="12"
          xs="12"
        >
          <v-btn
            large
            block
            dark
            :color="'#65BF73'"
            @click="onClickCart"
          >
            Add To cart
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          xl="4"
          lg="4"
          md="4"
          sm="12"
          xs="12"
        >
          <v-btn
            large
            block
            dark
            :color="'#65BF73'"
          >
            Pay method
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SettingModule } from '@/store/modules/setting'
import { ProductImageInterface } from '@/dataInterface/Product/productImageInterface'
import { currencyFormatter, numberFormatter } from '@/utils/formaterUtils'
import AdditionalDescription from './components/AdditionalDescription/index.vue'
import { AddtionalDescription, basicAddtionalDescription } from './components/AdditionalDescription/data'

@Component({
  name: 'ShoppingMallProductDetail',
  components: {
    AdditionalDescription
  }
})
export default class extends Vue {
  @Prop() private product !: ProductImageInterface
  private expressionCurrency !: string
  private reviewCount !: number
  private addtionalDescriptions !: Array<AddtionalDescription>
  private items !: Array<any>

  /** Form data to list */
  private color !: string
  private size !: string
  private quantity !: number

  constructor() {
    super()
    this.expressionCurrency = SettingModule.expressionCurrency
    this.reviewCount = 1230 // For test
    this.addtionalDescriptions = []
    this.addtionalDescriptions = JSON.parse(JSON.stringify(basicAddtionalDescription))
    this.color = ''
    this.size = ''
    this.quantity = 1
  }

  currencyFormatter(price: number) {
    return currencyFormatter('en', price)
  }

  numberFormatter(price: number) {
    return numberFormatter(price)
  }

  onClickCart() {
    if (!this.color) {
      alert('Color is not existed')
      return
    }
    if (!this.size) {
      alert('Size is not existed')
      return
    }
    if (!this.quantity) {
      alert('Quantity is not existed')
      return
    }
    if (this.quantity < 1) {
      alert('Quantity must be over 0')
      return
    }

    this.$emit('onClickCart')
  }

  onClickQuantityChange(num: number) {
    const newNum = this.quantity + num
    if (newNum < 0) {
      alert('Quantity must be over 0')
      this.quantity = 0
      return
    }
    this.quantity = newNum
  }
}
</script>

<style lang="scss" scoped>

</style>
