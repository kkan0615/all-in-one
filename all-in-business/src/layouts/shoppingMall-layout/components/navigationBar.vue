<!--
  TO DO LIST
  1. Change function that Search the submenus too! Only can find from root menus

 -->
<template>
  <v-navigation-drawer
    :value="navigation"
    :color="color"
    :dark="dark"
    :width="300"
    app
    temporary
    @input="onChangeNavigation"
  >

    <v-list>
      <v-list-item class="px-2" dark>
        <v-list-item-avatar>
          <v-img src="https://avatars0.githubusercontent.com/u/46660361?s=460&u=5c87a78f30eb7777300fa1f8fd539aa4a4cefdb1&v=4" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Youngjin Kwak</v-list-item-title>
          <v-list-item-subtitle>kkan0615@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-text-field
      v-model="searchText"
      class="ma-4"
      label="Search the menu"
    />
    <transition name="slide-fade" mode="out-in">
      <v-list v-if="currentParentId === null" key="1">
        <v-list-item
          v-for="menu in currentMenus"
          :key="menu.id"
          @click="onClickList(menu)"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
          <v-spacer />
          <v-list-item-icon v-if="menu.subMenus.length > 0">
            <v-icon>fa-angle-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <!-- </transition> -->
      <!-- If it's home(top root) -->

      <!-- If it's not home(sub menus) -->
      <!-- <transition name="slide-fade" mode="out-in"> -->
      <v-list v-else-if="currentParentId !== null" key="2">
        <!-- Go back to home(Top root) -->
        <v-list-item
          @click="onBackButtonClick"
        >
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Back to main</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="menu in currentMenus"
          :key="menu.id"
          @click="onClickList(menu)"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </transition>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn text block>setting</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { MenuInterface } from '@/dataInterface/menu/MenuInterface'
// import _ from 'lodash'

@Component({
  name: 'ShoppingNavigationBar',
  components: {
  }
})
export default class extends Vue {
  @Prop() private navigation!: boolean
  @Prop() private color!: string
  @Prop() private dark!: boolean
  @Prop() private menus!: Array<any>

  private currentParentId: number | null = null
  private currentLevel = 0
  private currentMenus: Array<any> = this.menus
  private searchText = ''

  /**
   * Send to index
   * @param value - Current status of navigation
   *
   */
  onChangeNavigation(value: boolean) {
    this.$emit('onChangeNavigation', value)
  }

  /**
   * Change displaying menus on navigation to subMenus
   * @param menu - Clicekd menu
   *
   * @returns if there is no submens, return same array. Else return the submenu
   */
  onClickList(menu: MenuInterface) {
    let tagerArr = this.menus
    for (let i = 0; i < this.currentLevel; i++) {
      tagerArr = tagerArr[i].subMenus
    }
    const parent = tagerArr.find(e => e.id === menu.id)
    if (parent.subMenus.length === 0) {
      if (this.$route.path !== parent.link) {
        this.$router.push({ path: parent.link })
      }
      return
    }
    this.currentMenus = parent.subMenus
    this.currentParentId = menu.id
    ++this.currentLevel
  }

  /**
   * Back to home(top root which parentId is null)
   */
  onBackButtonClick() {
    this.currentParentId = null
    this.currentLevel = 0
    this.currentMenus = this.menus
  }

  /**
   * Change the current menus based on search text
   * @param arr - array of menus that are found
   */
  searchChangeCurrentMenus(arr: Array<any>) {
    this.currentParentId = null
    this.currentLevel = 0
    this.currentMenus = arr
  }

  @Watch('searchText')
  /** If it needs to take  */
  // onChangeSearchText = _.throttle(async(text:string) => {
  //   // eslint-disable-next-line prefer-const
  //   let result = []
  //   for (let i = 0; i < this.menus.length; i++) {
  //     const element = this.menus[i]
  //     if (element.name.toLowerCase().includes(text.toLowerCase())) {
  //       result.push(element)
  //     }
  //   }

  //   this.searchChangeCurrentMenus(result)
  // }, 500)
  onChangeSearchText(text:string) {
    // eslint-disable-next-line prefer-const
    let result = []
    for (let i = 0; i < this.menus.length; i++) {
      const element = this.menus[i]
      if (element.name.toLowerCase().includes(text.toLowerCase())) {
        result.push(element)
      }
    }

    this.searchChangeCurrentMenus(result)
  }
}

</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
