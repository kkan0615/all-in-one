<template>
  <v-navigation-drawer
    app
    :value="navigatorBar"
    :temporary="temporary"
    @input="changeNabigatorBarStatus"
  >
    <v-switch
      v-model="temporary"
      class="pa-2"
      hide-details
      dense
      :label="`${temporary ? 'disable' : 'able'} temporary mode`"
    />
    <v-divider />
    <v-list>
      <v-list-item
        v-for="item in menus"
        :key="item.title"
        :to="{ name: item.link }"
        link
      >
        <!-- @click="linkToPage(item)" -->
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="primary">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MenuInterface } from './types/menu'
import { Menus } from './data/menu'

@Component({
  name: 'TodoLayoutNavigatorBar'
})
export default class extends Vue {
  @Prop({ required: true }) private navigatorBar !: boolean

  private temporary !: boolean
  private menus !: Array<MenuInterface>

  constructor() {
    super()
    this.temporary = true
    this.menus = []
  }

  created() {
    this.menus = JSON.parse(JSON.stringify(Menus))
  }

  private changeNabigatorBarStatus(status: boolean) {
    this.$emit('changeNabigatorBarStatus', status)
  }

  private linkToPage(menu: MenuInterface) {
    this.$router.push({ name: menu.link })
  }
}
</script>
