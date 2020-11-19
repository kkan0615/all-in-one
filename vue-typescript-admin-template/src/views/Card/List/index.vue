<!--
  Author: Youngjin Kwak
  CreatedAt: 11-18-2020
  UpdatedAt: 11-18-2020
  Description: Sample Vue Page
-->
<template>
  <div
    id="content"
  >
    <top-filter
      :title="$route.meta.title"
    >
      <template #prepend-actions>
        <setting-button
          :column-size="currentCol"
          @changeVisibleGridNumber="changeVisibleGridNumber"
        />
      </template>
    </top-filter>
    <v-row>
      <v-col
        v-for="i in test"
        :key="i"
        :cols="12"
        :sm="6"
        :lg="currentCol"
        :md="currentCol"
        :xl="currentCol"
      >
        <card
          :value="{ test: 'test'}"
        />
      </v-col>
      <v-col
        :cols="currentCol"
      >
        <card />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import Card from '@/views/Card/List/components/card.vue'
import SettingButton from '@/views/Card/List/components/SettingButton.vue'
import { DEFAULT_GRID_COLUMN_SIZE } from '@/views/Card/List/data/defaultValues'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'CardList',
  components: {
    SettingButton,
    Card,
    TopFilter
  },
})
export default class CardList extends Vue {
  private currentCol = DEFAULT_GRID_COLUMN_SIZE
  private test = 10

  mounted () {
    window.addEventListener('scroll', this.infiniteScroll)
  }

  beforeDestroy () {
    window.removeEventListener('scroll', this.infiniteScroll)
  }

  private infiniteScroll (event: Event) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.test < 40)
        this.test += 10
    }
  }

  private changeVisibleGridNumber (currentCol: number) {
    this.currentCol = currentCol
  }
}
</script>
