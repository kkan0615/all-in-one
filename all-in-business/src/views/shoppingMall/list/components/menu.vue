<template>
  <div>
    <shopping-menu-kinds
      v-for="(option, i) in searchOptions"
      :key="i"
      :option="option"
    />
    <v-btn
      class="my-4"
      :text="true"
      :color="color"
    >
      search
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { filterCommonCode } from '@/dataInterface/data/commonData'
import ShoppingMenuKinds from './menuCompoents/kinds.vue'
import { mainColor } from '@/config/shoppimgMall'
// import { gql } from 'apollo-boost'

interface SearchOption {
  title: string,
  majorCode: string,
  minorCode: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: Array<any>
  selectedOptions: Array<any>
  kinds: string
}

@Component({
  name: 'ListMenu',
  components: {
    ShoppingMenuKinds
  }
})
export default class extends Vue {
  private searchOptions: Array<SearchOption> = [
    { title: 'Size', majorCode: 'size', minorCode: 'clothes', list: [], kinds: 'circleChip', selectedOptions: [] },
    { title: 'Color', majorCode: 'color', minorCode: '', list: [], kinds: 'colorChip', selectedOptions: [] },
    { title: 'SubKinds', majorCode: 'subKinds', minorCode: '', list: [], kinds: 'searchChip', selectedOptions: [] }
  ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private loading = false
  private listLength = 0
  private color = mainColor

  // async loadOptions() {
  //   try {
  //     for (let i = 0; i < this.searchOptions.length; i++) {
  //       const element = this.searchOptions[i]
  //       const res = (await this.$apollo.query({
  //         query: gql`
  //          query{
  //             findCommonCodeListByCodes(majorCode: "${element.majorCode}", minorCode: "${element.minorCode}") {
  //               id
  //               majorCode
  //               minorCode
  //               value
  //             }
  //           }
  //         `
  //       })).data['findCommonCodeListByCodes']
  //       // console.log(res)

  //       this.searchOptions[i].list = res
  //     }
  //     this.listLength = this.searchOptions.length
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  created() {
    // this.loadOptions()
    for (let i = 0; i < this.searchOptions.length; i++) {
      const element = this.searchOptions[i]
      element.list = filterCommonCode(element.majorCode, element.minorCode)
    }
  }
}
</script>

<style scoped>

</style>
