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
      <v-text-field
        :value="value"
        :label="label"
        prepend-icon="event"
        :rules="rules"
        :readonly="readonly"
        :outlined="outlined"
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker :value="value" @input="changeValue" />
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'VDateBox'
})
export default class extends Vue {
  @Prop({ default: () => [] }) private rules !: Array<any>
  @Prop({ default: 'Date Picker' }) private label !: string
  @Prop({ default: false }) private outlined !: boolean
  @Prop({ default: '290px' }) private minWidth !: string
  @Prop({ default: true }) private readonly !: boolean
  @Prop() private value !: any

  private dateMenu !: boolean

  constructor() {
    super()
    this.dateMenu = false
  }

  private changeValue(date: string) {
    this.dateMenu = false
    this.$emit('input', date)
    this.$emit('updated:value', date)
  }
}
</script>
