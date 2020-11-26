<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <v-card
    :color="numberCardOption.color"
  >
    <v-list
      :color="numberCardOption.color"
    >
      <v-list-item>
        <v-list-item-icon>
          <v-icon
            :size="48"
            v-text="numberCardOption.icon"
          />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ numberCardOption.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ displayValue }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { NumberCardOption } from '@/views/Dashboard/Main/types'
import { localeFormattedNumber } from '@/utils/number'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'NumberCard',
})
export default class NumberCard extends Vue {
  @Prop({ required: true, default: 0 })
  private readonly numberCardOption !: NumberCardOption

  private get displayValue () {
    return localeFormattedNumber(this.numberCardOption.value)
  }
}
</script>
