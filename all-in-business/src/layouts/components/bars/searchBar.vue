
<template>
  <div>
    <v-autocomplete
      v-model="searchText"
      :items="items"
      :loading="isLoading"
      :full-width="true"
      :search-input.sync="search"
      width="200"
      class="mx-4"
      single-line
      append-icon="mdi-magnify"
      solo-inverted
      flat
      dark
      hide-details
      hide-selected
      label="Search"
      prepend-inner-icon="search"
      @click:append="onSearchTheResult"
      @keyup.enter="onSearchTheResult"
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
          <span v-text="item.name"></span>
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
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-coin</v-icon>
        </v-list-item-action>
      </template> -->
    </v-autocomplete>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'SearchBar'
})
export default class extends Vue {
  private searchText = 'Search'
  private items:Array<string> = []
  private states = [
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
  private search = ''
  private isLoading = true

  onSearchTheResult() {
    console.log(this.searchText)
  }

  @Watch('search')
  onChangeSearch(val: string) {
    val && val !== this.searchText && this.querySelections(val)
  }

  querySelections(v:string) {
    this.isLoading = true
    // Simulated ajax query
    setTimeout(() => {
      this.items = this.states.filter(e => {
        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
      }) // 실전에서는 서버에서 값을 가지고 온것을 넣는다.
      this.isLoading = false
    }, 500)
  }
}
</script>

<style scoped>
</style>
