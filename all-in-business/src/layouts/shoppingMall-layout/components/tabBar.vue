<template>
  <div>
    <v-menu
      v-for="menu in menus"
      :key="menu.id"
      open-on-hover
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="menu.subMenus.length > 0"
          :dark="dark"
          text
          v-on="on"
        >
          {{ menu.name }}
        </v-btn>
      </template>
      <v-card
        v-if="menu.subMenus.length > 0"
        class="pa-2"
      >
        <v-row>
          <v-col
            :cols="6"
          >
            <v-img
              :width="300"
              :height="300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO0GDl_xxqyI5Pax3rm_jfMna5U9DL0CR6B-DB8Yt5UUCp5y5h&usqp=CAU"
            />
          </v-col>
          <v-divider
            inset
            vertical
          />
          <v-col
            :cols="5"
          >
            <v-list>
              <v-list-item
                v-for="(subMenu, index) in menu.subMenus"
                :key="index"
              >
                <v-list-item-icon>
                  <v-icon v-text="subMenu.icon" />
                </v-list-item-icon>
                <v-list-item-title>{{ subMenu.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
      <!-- <v-list>
        <v-list-item
          v-for="(subMenu, index) in menu.subMenus"
          :key="index"
        >
          <v-list-item-title>{{ subMenu.name }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ShoppingTabBar',
  components: {
  }
})
export default class extends Vue {
  @Prop() private color!: string
  @Prop() private dark!: boolean
  @Prop() private menus!: Array<any>
}

</script>

<style scoped>

</style>
