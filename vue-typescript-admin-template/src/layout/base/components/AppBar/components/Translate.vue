<template>
  <v-menu
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in translateOptions"
        :key="lang.lang"
        @click="changeLocale(lang.lang)"
      >
        <v-list-item-title
          class="cursor-pointer"
        >
          {{ lang.title }}
        </v-list-item-title>
        <!--        <v-list-item-title-->
        <!--          class="cursor-pointer"-->
        <!--          @click="changeLocale('kr')"-->
        <!--        >-->
        <!--          한국어-->
        <!--        </v-list-item-title>-->
        <!--      </v-list-item>-->
        <!--      <v-list-item>-->
        <!--        <v-list-item-title-->
        <!--          class="cursor-pointer"-->
        <!--          @click="changeLocale('en')"-->
        <!--        >-->
        <!--          English-->
        <!--        </v-list-item-title>-->
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { langOptions } from '../data/translate'

  @Component({
    name: 'TranslateMenu',
  })
export default class TranslateMenu extends Vue {
    public translateOptions = langOptions

    private changeLocale (lang: string) {
      this.$i18n.locale = lang
      // location.reload()
    }
}
</script>
