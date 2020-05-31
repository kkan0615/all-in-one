<template>
  <div>
    <HorizonBanner />
    <!-- hot items list will be here -->
    <v-row>
      <v-col
        lg="2"
        xl="2"
        md="12"
        sm="12"
        xs="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <ListMenu />
        </v-card>
      </v-col>
      <v-col
        lg="10"
        xl="10"
        md="12"
        sm="12"
        xs="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <shopping-list />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ListMenu, ShoppingList } from './components'
import HorizonBanner from '@/components/adverBanner/horizonBanner.vue'

@Component({
  name: 'List',
  components: {
    ListMenu,
    ShoppingList,
    HorizonBanner
  }
})
export default class extends Vue {
}
</script>

<style>
</style>
