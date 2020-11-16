<!--
  Author: Youngjin Kwak
  CreatedAt: 11-16-2020
  UpdatedAt: 11-16-2020
  Description: Sample Vue Page
-->
<template>
  <v-menu
    v-model="menu"
    :open-on-hover="openOnHover"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :color="color"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>help_outline</v-icon>
      </v-btn>
    </template>
    <v-card
      color="secondary"
    >
      <v-card-text>
        {{ content }}
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'HelpHowToUse',
})
export default class HelpHowToUse extends Vue {
  @Prop({ type: String, required: false, default: 'primary' })
  private readonly color !: string
  @Prop({ type: String, required: true })
  private readonly content !: string
  @Prop({ type: Boolean, required: false, default: false })
  private readonly openOnHover !: boolean

  private menu = false
}
</script>
