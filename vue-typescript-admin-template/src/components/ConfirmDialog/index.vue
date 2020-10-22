<template>
  <v-dialog
    :value="true"
    :width="width"
    :persistent="persistent"
    @keydown.esc="onClickButtonNo"
  >
    <v-card>
      <!-- Title -->
      <v-card-title
        :class="titleFontClasses"
      >
        {{ title }}
      </v-card-title>
      <!-- Subtitle-->
      <v-card-subtitle
        v-if="subtitle"
        :class="subtitleFontClasses"
      >
        {{ subtitle }}
      </v-card-subtitle>
      <v-divider />
      <!-- Content (Display message) -->
      <v-card-text
        :class="contentFontClasses"
      >
        {{ content }}
      </v-card-text>
      <v-divider />
      <v-card-actions
        class="justify-end"
      >
        <v-btn
          :color="buttonNoColor"
          :text="buttonNoFlat"
          large
          @click="onClickButtonNo"
        >
          {{ buttonNoText }}
        </v-btn>
        <v-btn
          :color="buttonYesColor"
          :text="buttonYesFlat"
          large
          @click="onClickButtonYes"
        >
          {{ buttonYesText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'ConfirmDialog'
  })
  export default class ConfirmDialog extends Vue {
    private title = '확인창'
    private titleClass = 'primary white--text'
    private titleColor = 'primary'
    private subtitle = ''
    private subtitleClass = 'primary white--text'
    private subtitleColor = 'primary'
    private content = ''
    private contentClass = ''
    private contentColor = ''
    private buttonNoText = '아니오'
    private buttonNoColor = 'primary'
    private buttonYesText = '예'
    private buttonYesColor = 'primary'
    private buttonYesFlat = false
    private buttonNoFlat = true
    private width = '300px'
    private status = false
    private persistent = true

    /**
     * @return class for title
     */
    private get titleFontClasses (): Record<string, boolean> {
      const composite: Array<string> = this.titleClass.split(' ')
      composite.push(this.titleColor)

      return composite.length > 0 ? {
        [composite.join(' ')]: true,
      } : {}
    }

    /**
     * @return class for subtitle
     */
    private get subtitleFontClasses (): Record<string, boolean> {
      const composite: Array<string> = this.subtitleClass.split(' ')
      composite.push('py-2')
      composite.push(this.subtitleColor)

      return composite.length > 0 ? {
        [composite.join(' ')]: true,
      } : {}
    }

    /**
     * @return class for content
     */
    private get contentFontClasses (): Record<string, boolean> {
      const composite: Array<string> = this.contentClass.split(' ')
      composite.push('pa-4')
      composite.push(this.contentColor)

      return composite.length > 0 ? {
        [composite.join(' ')]: true,
      } : {}
    }

    mounted () {
      window.addEventListener('keydown', this.onKeyDown)
    }

    destroyed () {
      window.removeEventListener('keydown', this.onKeyDown)
    }

    private onKeyDown (event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.stopPropagation()
        this.onClickButtonYes()
      }
    }

    private onClickButtonYes () {
      this.$emit('input', true)
      this.status = true
      this.$destroy()
    }

    private onClickButtonNo () {
      this.$emit('input', false)
      this.status = false
      this.$destroy()
    }
  }
</script>
