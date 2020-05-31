<template>
  <div>
    <v-card elevation="0">
      <v-card-title>
        <div>{{ option.title }}</div>
        <v-spacer />
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-expand-transition>
        <div v-show="show">
          <div v-if="option.kinds === 'circleChip'">
            <v-row no-gutters>
              <v-col
                v-for="(value, i) in option.list"
                :key="i"
                cols="4"
                xl="4"
                lg="4"
                md="1"
                sm="1"
                xs="1"
              >
                <div class="text-center">
                  <v-chip class="ma-2">{{ value.value }}</v-chip>
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="option.kinds === 'colorChip'">
            <v-row no-gutters>
              <v-col
                v-for="(value, i) in option.list"
                :key="i"
                cols="3"
                xl="3"
                lg="3"
                md="1"
                sm="1"
                xs="1"
              >
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    :color="`#${value.value}`"
                  />
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="option.kinds === 'searchChip'">
            <v-row no-gutters>
              <v-col
                cols="2"
                xl="2"
                lg="2"
                md="2"
                sm="2"
                xs="2"
              >
                <v-checkbox
                  :value.sync="checkbox"
                  :dense="true"
                  :label="checkbox ? 'on' : 'off'"
                />
              </v-col>
              <v-col
                v-if="checkbox"
                cols="10"
                xl="10"
                lg="10"
                md="10"
                sm="10"
                xs="10"
              >
                <v-autocomplete

                  :value.sync="searches"
                  :items="option.list"
                  outlined
                  dense
                  chips
                  small-chips
                  label="Keywords"
                  item-text="minorCode"
                  item-value="value"
                  multiple
                  @change="onChangeAutoComplete"
                />
              </v-col>
            </v-row>
          </div>
          <div v-else-if="option.kinds === 'rating'">
            <v-row no-gutters>
              <v-col cols="12">
                <v-rating
                  v-model="rating"
                  :length="5"
                  color="red lighten-3"
                  background-color="grey lighten-1"
                />
              </v-col>
            </v-row>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
    <v-divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

/** 폴더 따로빼놓기 */
interface SearchOption {
  title: string,
  majorCode: string,
  minorCode: string,
  selectedOptions: Array<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: Array<any>
  kinds: string
}

@Component({
  name: 'ShoppingMenuKinds',
  components: {
  }
})
export default class extends Vue {
  @Prop() private option!: SearchOption
  private show = true
  /** AutoComplete chips */
  private searches = []

  /** Rating for search */
  private rating = 5
  private checkbox = false

  onChangeAutoComplete(arr: Array<string>) {
    /** Initialize selectedOptions to [] */
    this.option.selectedOptions = []
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      const found = this.option.list.find(e => e.minorCode === element)
      this.option.selectedOptions.push(found)
    }
  }
}
</script>

<style scoped>
</style>
