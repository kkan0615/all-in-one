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
        :items="breadcrumbs"
        divider="-"
      />
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-actions
      class="justify-end"
    >
      <!-- Slot -->
      <slot name="actions" />
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
    </v-card-actions>
    <!-- For the filter panel -->
    <v-divider
      v-if="visibleFilter"
    />
    <v-card-text
      v-if="visibleFilter"
    >
      Test Filter
    </v-card-text>
    <v-divider
      v-if="visibleFilter"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'
import { Breadcrumb } from '@/components/TopFIlter/type'
import { CustomRouteConfig } from '@/types/customRouteConfig'

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

    for (let i = 1; i < splitPath.length - 1; i++) {
      result.push({
        text: splitPath[i],
        disabled: false,
        href: splitPath[i],
      })
    }

    result.push({
      text: splitPath[splitPath.length - 1],
      disabled: true,
      href: splitPath[splitPath.length - 1],
    })

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
