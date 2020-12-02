<!--
  Author: Youngjin Kwak
  CreatedAt: 11-18-2020
  UpdatedAt: 12-02-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    <v-skeleton-loader
      v-if="value.loading"
      v-bind="attrs"
      type="card-avatar, article, actions"
    />
    <v-card
      v-else
      color="secondary"
    >
      <v-img
        height="250"
        :src="value._id === '5f5cc20b67681639f8989716' ? value.avatar : 'https://picsum.photos/500'"
      />

      <v-card-title
        @click="test"
      >
        {{ value.nickname }}
        <v-spacer />
        <v-avatar
          class="elevation-2"
          :color="value.loggedIn ? 'green' : 'red'"
          size="16"
        />
      </v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          />

          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>

        <!--        <div class="my-4 subtitle-1">-->
        <!--          $ • Italian, Cafe-->
        <!--        </div>-->

        <!--        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->
      </v-card-text>

      <v-card-actions
        class="justify-end"
      >
        <v-btn
          text
          elevation="0"
          color="primary"
        >
          Detail
        </v-btn>
      </v-card-actions>

      <!--      <v-divider class="mx-4" />-->

      <!--      <v-card-title>Tonight's availability</v-card-title>-->

      <!--      <v-card-text>-->
      <!--        <v-chip-group-->
      <!--          active-class="deep-purple accent-4 white&#45;&#45;text"-->
      <!--          column-->
      <!--        >-->
      <!--          <v-chip>5:30PM</v-chip>-->

      <!--          <v-chip>7:30PM</v-chip>-->

      <!--          <v-chip>8:00PM</v-chip>-->

      <!--          <v-chip>9:00PM</v-chip>-->
      <!--        </v-chip-group>-->
      <!--      </v-card-text>-->

      <!--      <v-card-actions>-->
      <!--        <v-btn-->
      <!--          color="deep-purple lighten-2"-->
      <!--          text-->
      <!--        >-->
      <!--          Reserve-->
      <!--        </v-btn>-->
      <!--      </v-card-actions>-->
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import { UserCardValue } from '@/views/Sample/CardTableSwapper/types/userCardValue'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'UserCard',
  components: {
    TopFilter
  },
})
export default class UserCard extends Vue {
  @Prop({ required: false, type: Object })
  private readonly value!: UserCardValue

  private attrs = {
    color: 'secondary',
  }

  private test () {
    this.value.loading = true

    setTimeout(() => {
      this.value.loading = false
    }, 1000)
  }
}
</script>
