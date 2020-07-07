<template>
  <v-app-bar
    dense
    app
    color="amber"
  >
    <v-app-bar-nav-icon
      @click="changeNabigatorBarStatus"
    />

    <v-toolbar-title>To do application</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <!-- <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
    <TodoLayoutAppBarAuthIcon />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import TodoLayoutAppBarAuthIcon from './components/authIcon.vue'

@Component({
  name: 'TodoLayoutAppBar',
  components: {
    TodoLayoutAppBarAuthIcon
  }
})
export default class extends Vue {
  @Prop({ required: true }) private navigatorBar !: boolean

  private openNavigatorBar() {
    this.$emit('openNavigatorBar')
  }

  private closeNavigatorBar() {
    this.$emit('closeNavigatorBar')
  }

  private changeNabigatorBarStatus() {
    if (this.navigatorBar) {
      this.closeNavigatorBar()
    } else {
      this.openNavigatorBar()
    }
  }
}
</script>
