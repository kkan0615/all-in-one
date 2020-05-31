
<template>
  <v-app-bar
    color="grey darken-4"
    dense
    app
    dark
    :flat="flatBool"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <v-app-bar-nav-icon @click.stop="onChangeDrawer" />

    <v-icon
      class="mx-4"
      large
    >
      mdi-youtube
    </v-icon>

    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer />

    <SearchBar />

    <v-spacer />

    <v-btn
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <Avatar />
    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        background-color="grey darken-4 accent-4"
        dark
        :centered="centered"
        :grow="grow"
      >
        <v-tab v-for="(tab, i) in tabs" :key="tab.id" @mouseover="onMouseOverOnTab(i)">{{ tab.name }}</v-tab>

        <v-tabs-items v-show="hover" v-model="tab" class="px-12 elevation-2">
          <v-tab-item v-for="tab in tabs" :key="tab.id">
            <v-card flat align="center">
              <v-card-text>{{ tab.content }}</v-card-text>
            </v-card>
            <v-row
              justify="center"
              class="mb-6"
              no-gutters
            >
              <v-col
                v-for="tag in tab.tags"
                :key="tag.id"
                cols="12"
                sm="6"
                md="4"
                lg="2"
                align="center"
              >
                <TagBar :tag="tag" />
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TagBar, Avatar, SearchBar } from './bars'
import { TabsInterface } from './bars/data/tabs'

@Component({
  name: 'AppBar',
  components: {
    TagBar,
    Avatar,
    SearchBar
  }
})
export default class extends Vue {
  private message = 'app-bar'
  private flatBool = true
  // private tabs: Array<TabsInterface> = []
  private tab = 0
  private text = 'hi text long and log'
  private grow = false
  private centered = true
  private hover = false
  @Prop() private drawer!:boolean
  @Prop() private tabs: Array<TabsInterface> = []

  onChangeDrawer() {
    this.$emit('onChangeDrawer', !this.drawer)
  }

  /** Hover tab movement */
  onMouseOverOnTab(index: number) {
    this.tab = index
  }
}
</script>

<style scoped>
</style>
