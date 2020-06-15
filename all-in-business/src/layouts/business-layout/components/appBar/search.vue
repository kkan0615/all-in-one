<template>
  <v-autocomplete
    ref="searchRef"
    v-model="searchValue"
    :items="states"
    :filter="customFilter"
    hide-details
    color="white"
    item-text="name"
    :label="$t('appBarTooltips.searchLabel')"
    @keydown.enter="onEnter"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

// interface Test {
//   name: string,
//   abbr: string,
//   id: number
// }

@Component({
  name: 'Search'
})
export default class extends Vue {
  private searchValue !: string
  @Prop() private open !: boolean
  private states = [
    { name: 'Florida', abbr: 'FL', id: 1 },
    { name: 'Georgia', abbr: 'GA', id: 2 },
    { name: 'Nebraska', abbr: 'NE', id: 3 },
    { name: 'California', abbr: 'CA', id: 4 },
    { name: 'New York', abbr: 'NY', id: 5 }
  ]

  constructor() {
    super()
    this.searchValue = ''
  }

  $refs !: {
    searchRef: any
  }

  private customFilter(item: any, queryText: string) {
    const textOne = item.name.toLowerCase()
    const textTwo = item.abbr.toLowerCase()
    const searchText = queryText.toLowerCase()

    return textOne.indexOf(searchText) > -1 ||
      textTwo.indexOf(searchText) > -1
  }

  private onEnter() {
    if (!this.searchValue) {
      return
    }

    console.log('enter')
  }
  @Watch('open')
  focuseToSearch(newValue: boolean) {
    if (newValue) {
      this.$nextTick(() => {
        this.$refs.searchRef.focus()
      })
    }
  }
}
</script>

<style scoped>
</style>
