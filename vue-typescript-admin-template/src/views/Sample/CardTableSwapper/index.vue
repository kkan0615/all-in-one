<!--
  Author: Youngjin Kwak
  CreatedAt: 11-18-2020
  UpdatedAt: 12-02-2020
  Description: Sample Vue Page
-->
<!--
@TODO
1. 로딩 가운데로 정렬
2. 인피니트 스크롤시 로딩후 스크롤 위로 올리기
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
        v-for="user in users"
        :key="user._id"
        :cols="12"
        :sm="6"
        :lg="currentGridColumnSize"
        :md="currentGridColumnSize"
        :xl="currentGridColumnSize"
      >
        <user-card
          :value="user"
        />
      </v-col>
      <v-col
        v-for="i in 20"
        :key="i"
        :cols="12"
        :sm="6"
        :lg="currentGridColumnSize"
        :md="currentGridColumnSize"
        :xl="currentGridColumnSize"
      >
        <v-skeleton-loader
          v-if="scrollLoading"
          type="card-avatar, article, actions, card-heading"
        />
      </v-col>
    </v-row>
    <table
      v-else-if="typeOfViews === 'table'"
    />
    <div
      class="justify-center align-center"
    >
      <v-progress-circular
        v-if="scrollLoading"
        indeterminate
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import SettingButton from '@/views/Sample/CardTableSwapper/components/SettingButton.vue'
import {
  DEFAULT_GRID_COLUMN_SIZE,
  DEFAULT_TABLE_PAGING_SIZE
} from '@/views/Sample/CardTableSwapper/data/defaultValues'
import { TypeOfViews, TypeOfVisible } from '@/views/Sample/CardTableSwapper/types/settings'
import Table from '@/views/Sample/CardTableSwapper/components/Table.vue'
import { UserCardValue } from './types/userCardValue'
import { userSamples } from '@/samples/models/user'
import UserCard from '@/views/Sample/CardTableSwapper/components/card.vue'
import _ from 'lodash'
import { generatorIntegerRandom } from '@/utils/random'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'CardTableSwapper',
  components: {
    UserCard,
    Table,
    SettingButton,
    TopFilter
  },
})
export default class CardTableSwapper extends Vue {
  /* Users */
  private users: Array<UserCardValue> = []
  private currentGridColumnSize = DEFAULT_GRID_COLUMN_SIZE
  private currentPagingSize = DEFAULT_TABLE_PAGING_SIZE
  private typeOfViews: TypeOfViews = 'grid'
  private typeOfVisible: TypeOfVisible = 'infinite'
  /* Index of current page number */
  private pageIndex = 0
  /* Loading for bottom */
  private scrollLoading = false

  async created () {
    /* Start loading */
    await this.$loading.openFullScreenLoading()
    /* Initialize users */
    await this.initUsers()
    /* Stop the loading */
    await this.$loading.closeFullScreenLoading()
  }

  mounted () {
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

  // private async infiniteScroll () {
  //   /* If it's already in loading status, return*/
  //   if(this.scrollLoading) return
  //
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     await this.loadMoreUsers()
  //     if (this.test < 40)
  //       this.test += 10
  //   }
  // }

  private infiniteScroll = _.throttle(async () => {
    /* If it's already in loading status, return*/
    if(this.scrollLoading) return

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      await this.loadMoreUsers()
    }
  })

  private async initUsers () {
    // @TODO: CHANGE TO FRONT MODE
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'frontMode') {
      this.users = (userSamples.slice(this.pageIndex, (this.pageIndex + 1) * 20) as Array<UserCardValue>)
        .map(userSample => {
          userSample.loggedIn = generatorIntegerRandom(2) === 1
          userSample.loading = false
          return userSample
        })
      this.pageIndex++
    }
    // console.log(process.env)
  }

  private async loadMoreUsers () {
    this.scrollLoading = true
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'frontMode') {
      const splicedUsers = (userSamples.slice(this.pageIndex * 20,  (this.pageIndex + 1) * 20) as Array<UserCardValue>)
        .map(userSample => {
          userSample.loggedIn = generatorIntegerRandom(2) === 1
          userSample.loading = false
          return userSample
        })

      console.log(splicedUsers)
      if (!splicedUsers.length) {
        this.scrollLoading = false
        return
      }
      // @Test: check loading is working
      setTimeout(() => {
        this.users = this.users.concat(splicedUsers)
        this.pageIndex++
        this.scrollLoading = false
      }, 1000)

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
