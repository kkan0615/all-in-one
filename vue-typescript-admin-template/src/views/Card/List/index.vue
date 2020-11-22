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
          :current-grid-column-size.sync="currentGridColumnSize"
          :current-paging-size.sync="currentPagingSize"
          :type-of-views.sync="typeOfViews"
          :type-of-visible.sync="typeOfVisible"
        />
      </template>
    </top-filter>
    <v-row
      v-if="typeOfViews === 'grid'"
    >
      <v-col
        v-for="i in test"
        :key="i"
        :cols="12"
        :sm="6"
        :lg="currentGridColumnSize"
        :md="currentGridColumnSize"
        :xl="currentGridColumnSize"
      >
        <card
          :value="{ test: 'test'}"
        />
      </v-col>
      <v-col
        :cols="currentGridColumnSize"
      >
        <card />
      </v-col>
    </v-row>
    <table
      v-else-if="typeOfViews === 'table'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import Card from '@/views/Card/List/components/card.vue'
import SettingButton from '@/views/Card/List/components/SettingButton.vue'
import {
  DEFAULT_GRID_COLUMN_SIZE,
  DEFAULT_TABLE_PAGING_SIZE
} from '@/views/Card/List/data/defaultValues'
import { TypeOfViews, TypeOfVisible } from '@/views/Card/List/types/settings'
import Table from '@/views/Card/List/components/Table.vue'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'CardList',
  components: {
    Table,
    SettingButton,
    Card,
    TopFilter
  },
})
export default class CardList extends Vue {
  private currentGridColumnSize = DEFAULT_GRID_COLUMN_SIZE
  private currentPagingSize = DEFAULT_TABLE_PAGING_SIZE
  private typeOfViews: TypeOfViews = 'grid'
  private typeOfVisible: TypeOfVisible = 'infinite'
  private test = 10

  mounted () {
    console.log(process.env)
    if (this.typeOfVisible === 'infinite')
      this.mountInfiniteScroll()
  }

  beforeDestroy () {
    this.removeInfiniteScroll()
  }

  private mountInfiniteScroll () {
    window.addEventListener('scroll', this.infiniteScroll)
  }

  private removeInfiniteScroll () {
    window.removeEventListener('scroll', this.infiniteScroll)
  }

  private infiniteScroll () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (this.test < 40)
        this.test += 10
    }
  }

  private setTypeOfViews (typeOfViews: TypeOfViews) {
    this.typeOfViews = typeOfViews
  }

  private setTypeOfVisible (typeOfVisible: TypeOfVisible) {
    this.typeOfVisible = typeOfVisible
  }
}
</script>
