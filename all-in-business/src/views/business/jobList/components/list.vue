<template>
  <div>
    <!-- <v-row>
      <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

          <v-divider />

          <v-list dense>
            <v-list-item v-for="(key, index) in filteredKeys" :key="index">
              <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
              <v-list-item-content
                class="align-end"
                :class="{ 'blue--text': sortBy === key }"
              >{{ item[key.toLowerCase()] }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row> -->
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class extends Vue {
  private message = 'hi'
}
</script>

<style lang="scss" scoped>
</style>
