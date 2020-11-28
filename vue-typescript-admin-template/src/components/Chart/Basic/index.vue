<!--
  Author: Youngjin Kwak
  CreatedAt: 11-27-2020
  UpdatedAt: 11-27-2020
  Description: Sample Vue Page
-->
<template>
  <v-card
    width="100%"
    color="secondary"
  >
    <v-card-title>
      {{ title }}
      <v-spacer />
      <v-btn
        icon
        @click="refresh"
      >
        <v-icon>cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <div
        :id="id"
        :style="{height, width}"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { EchartHandler } from '@/mixins/echartHandler'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'BasicChart',
})
export default class BasicChart extends Mixins(EchartHandler) {

}
</script>
