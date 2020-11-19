<!--
  Author: Youngjin Kwak
  CreatedAt: 09-30-2020
  UpdatedAt: 11-08-2020
  Description: Top header part
-->
<template>
  <v-card
    class="mb-4 pa-0"
    color="background"
    flat
  >
    <v-card-title>
      {{ title }}
      <v-btn
        v-if="visibleBookmark"
        class="mx-2"
        :color="isInFavorite ? 'primary' : ''"
        icon
        elevation="0"
        @click="onBookmark"
      >
        <v-icon>
          bookmark
        </v-icon>
      </v-btn>
      <v-spacer />
      <v-breadcrumbs
        class="pa-2"
        :items="breadcrumbs"
        divider="-"
      />
    </v-card-title>
    <v-card-subtitle
      v-if="subtitle"
    >
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-actions
      class="justify-end"
    >
      <!-- prepend-actions -->
      <slot name="prepend-actions" />
      <!-- Filter Button -->
      <v-btn
        class="mx-2"
        color="primary"
        elevation="0"
        @click="changeVisibleFilter"
      >
        <v-icon
          left
        >
          sort
        </v-icon>
        Filter
      </v-btn>
      <!-- prepend-actions -->
      <slot name="append-actions" />
    </v-card-actions>
    <!-- For the filter panel -->
    <div
      v-if="visibleFilter"
    >
      <v-divider />
      <v-card-text>
        <slot name="filter">
          <div
            v-for="option in TopFilterOptions"
            :key="option.dataField"
          >
            {{ option }}
          </div>
        </slot>
      </v-card-text>
      <v-divider />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'
import { Breadcrumb } from '@/components/TopFIlter/type'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import { TopFilterOption } from '@/components/TopFIlter/type/TopFilterOption'

/**
 * @author - Youngjin Kwak
 * @description - TopFilter
 */
@Component({
  name: 'TopFilter',
})
export default class TopFilter extends Vue {
  @Prop({ required: true, type: String })
  private readonly title !: string
  @Prop({ required: false, type: String, default: '' })
  private readonly subtitle!: string
  @Prop({ required: false, default: true, type: Boolean })
  private readonly visibleBookmark !: boolean
  @Prop({ required: false, type: Array, default: () => [] })
  private readonly TopFilterOptions !: Array<TopFilterOption<any>>

  private visibleFilter = false

  /*********************************************************************
   * @description Change visible for filter
   * @return Array of breadcrumb
   ********************************************************************/
  private get breadcrumbs (): Array<Breadcrumb> {
    const result = []
    const splitPath = this.$route.fullPath.split('/')
    if (splitPath[0] === '') {
      result.push({
        text: 'Home',
        disabled: false,
        href: '/',
      })
    }

    for (let i = 0; i < this.$router.currentRoute.matched.length; i++) {
      result.push({
        text: this.$router.currentRoute.matched[i].meta.title,
        disabled: false,
        href: this.$router.currentRoute.matched[i].path,
      })
    }

    result[this.$router.currentRoute.matched.length].disabled = true

    return result
  }

  private get isInFavorite (): boolean {
    return !!this.$store.state.menu.favoriteRoutes.find((menu: CustomRouteConfig) =>
      menu.name === this.$route.name
    )
  }

  /*********************************************************************
   * @description Change visible of filter
   ********************************************************************/
  private changeVisibleFilter () {
    this.visibleFilter = !this.visibleFilter
  }

  /*********************************************************************
   * @description Add or remove route from favorite route in menu store
   *********************************************************************/
  private async onBookmark () {
    const index = await this.$store.dispatch('menu/addFavoriteRoutes', this.$route)
    this.$store.commit('alert/showSnackBar', {
      content: `${this.$route.meta.title} is ${index === -1 ? 'is on bookmark' : 'is not on bookmark'}`,
      color: 'success',
    } as SnackbarState)
  }

}
</script>
