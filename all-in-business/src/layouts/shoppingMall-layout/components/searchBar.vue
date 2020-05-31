<template>
  <transition name="bounce">
    <v-autocomplete
      v-show="open"
      ref="searchBarRef"
      v-model="model"
      class="ma-4"
      :loading="isLoading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      :label="label"
      solo-inverted
    >
    <!-- <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          Search for your favorite
          <strong>Cryptocurrency</strong>
        </v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attr, on, item, selected }">
      <v-chip
        v-bind="attr"
        :input-value="selected"
        color="blue-grey"
        class="white--text"
        v-on="on"
      >
        <v-icon left>mdi-coin</v-icon>
        <span v-text="item.name" />
      </v-chip>
    </template>
    <template v-slot:item="{ item }">
      <v-list-item-avatar
        color="indigo"
        class="headline font-weight-light white--text"
      >
        {{ item.name.charAt(0) }}
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name" />
        <v-list-item-subtitle v-text="item.symbol" />
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-coin</v-icon>
      </v-list-item-action>
    </template> -->
    </v-autocomplete>
  </transition>

</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'

@Component({
  name: 'ShoppingAppBarSearch',
  components: {
  }
})
export default class extends Vue {
  @Prop() private color!: string
  @Prop() private dark!: boolean
  @Prop() private open!: boolean

  $refs!: {
    searchBarRef: HTMLInputElement
  }

  private isLoading = false
  private items:Array<string> = []
  private testArr = [
    '한글명',
    '한글1',
    '한글2',
    '한글3',
    '한글4',
    '한글5',
    '한글6',
    '한글7',
    '한글8',
    '한글9',
    '한글10',
    '한글11',
    '한글12',
    '한글13',
    '한글14',
    '한글15',
    '곽영진',
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ]
  private model = null
  private search = null
  private label = 'Search the product!'

  querySelections(v:string) {
    this.isLoading = true
    // Simulated ajax query
    setTimeout(() => {
      this.items = this.testArr.filter(e => {
        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
      })
      this.isLoading = false
    }, 500)
  }

  @Watch('search')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChangeSearch(val:string) {
    val && val !== this.model && this.querySelections(val)
  }

  @Watch('open')
  onChangeOpenStatus(val: boolean) {
    if (!val) {
      return
    }
    this.$nextTick(() => this.$refs.searchBarRef.focus())
  }
}

</script>

<style scoped>

</style>
