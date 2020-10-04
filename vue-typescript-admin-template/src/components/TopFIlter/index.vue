<!--
  Author: Youngjin Kwak
  CreatedAt: 09-30-2020
  UpdatedAt: 10-03-2020
  Description: Sample Vue Page
-->
<template>
  <v-card
    color="secondary"
  >
    <v-list
      color="secondary"
      dense
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="text-h6"
          >
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <div
            class="d-flex flex-row"
          >
            <!-- Action Slot -->
            <slot
              name="action"
              class="mx-2"
            />
            <!--bookmark-->
            <v-btn
              v-if="visibleBookmark"
              class="mx-2"
              color="primary"
              elevation="0"
              @click="onBookmark"
            >
              <v-icon
                left
              >
                bookmark
              </v-icon>
              bookmark
            </v-btn>
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
          </div>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        v-if="visibleFilter"
      />
      <v-list-item
        v-if="visibleFilter"
      >
        <v-card
          color="secondary"
          elevation="0"
        >
          <slot name="content" />
        </v-card>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'

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
  @Prop({ required: false, default: true, type: Boolean })
  private readonly visibleBookmark !: boolean

  private visibleFilter = false

  /*********************************************************************
   * @description Change visible for filter
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
