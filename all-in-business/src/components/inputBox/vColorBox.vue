<template>
  <v-menu
    v-model="dateMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    :min-width="minWidth"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-row class="mx-0">
        <v-avatar
          class="mx-2"
          :color="value"
          :size="size"
          v-bind="attrs"
          v-on="on"
        />
        <v-text-field
          v-if="!hideInput"
          :value="value.toUpperCase()"
          :label="label"
          :rules="rules"
          :readonly="readonly"
          :outlined="outlined"
          :hide-details="hideDetails"
          v-bind="attrs"
          v-on="on"
        />
      </v-row>
    </template>
    <!-- <v-date-picker :value="value" @input="changeValue" /> -->
    <v-color-picker light :value="value" class="ma-2" show-swatches swatches-max-height="300px" @input="changeValue" />
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'VColorBox'
})
export default class extends Vue {
  @Prop({ default: () => [] }) private rules !: Array<any>
  @Prop({ default: 'Color Picker' }) private label !: string
  @Prop({ default: false }) private outlined !: boolean
  @Prop({ default: '290px' }) private minWidth !: string
  @Prop({ default: true }) private readonly !: boolean
  @Prop({ default: false }) private hideInput !: boolean
  @Prop({ default: false }) private hideDetails !: boolean
  @Prop({ default: 48, type: [Number, String] }) private size !: number | string
  @Prop() private value !: string

  public dateMenu !: boolean

  constructor() {
    super()
    this.dateMenu = false
  }

  private changeValue(date: string) {
    this.dateMenu = false
    this.$emit('input', date)
    this.$emit('updated:value', date)
    this.$emit('change', date)
  }
}
</script>
