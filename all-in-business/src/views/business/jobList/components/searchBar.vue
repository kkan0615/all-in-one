<template>
  <div>
    {{ message }}
    <!-- <v-toolbar
      dark
      color="blue darken-3"
      class="mb-1"
    >
      <v-text-field
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
      />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-spacer />
        <v-select
          v-model="sortBy"
          flat
          solo-inverted
          hide-details
          :items="keys"
          prepend-inner-icon="search"
          label="Sort by"
        />
        <v-spacer />
        <v-btn-toggle
          v-model="sortDesc"
          mandatory
        >
          <v-btn
            large
            depressed
            color="blue"
            :value="false"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <v-btn
            large
            depressed
            color="blue"
            :value="true"
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-toolbar> -->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class extends Vue {
  private message = 'hi searchbar'
}
</script>

<style scoped>

</style>
