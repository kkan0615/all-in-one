<template>
  <v-card
    :color="value.color"
    :light="islightColor"
    :dark="!islightColor"
    max-width="400px"
    max-height="200px"
    @mouseenter="onVisibleActions"
    @mouseleave="offVisibleActions"
  >
    <v-card-title
      class="pa-2"
    >
      {{ value.title }}
    </v-card-title>
    <!-- <v-card-text v-html="value.content" /> -->
    <div
      class="acitons-height"
    >
      <transition name="fade">
        <v-card-actions
          v-if="visibleActions"
        >
          <v-spacer />

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <!-- <v-list>
          <v-list-item
            v-for="(item, i) in list"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
            <v-card
              v-for="(item, i) in list"
              :key="i"
            >
              <v-card-title>
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-menu>
          <v-btn
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-actions>
      </transition>
    </div>

  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { islightColor } from '@/uitls/color'
import { ToDoInterface } from '@/types/todo'
import { ListInterface } from '@/types/simpleList'
import { toDoCardList } from './data/list'

@Component({
  name: 'ToDoCard'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
  @Prop({ required: true }) private value !: ToDoInterface
  private list !: Array<ListInterface>
  private visibleActions !: boolean

  constructor() {
    super()
    this.list = toDoCardList
    this.visibleActions = false
  }

  public get islightColor() : boolean {
    const result = islightColor(this.value.color)

    // if (!result) {
    //   return this.$vuetify.theme.dark
    // }
    return result || this.$vuetify.theme.dark
  }

  private onVisibleActions() {
    this.visibleActions = true
  }

  private offVisibleActions() {
    this.visibleActions = false
  }
}
</script>

<style lang="scss" scoped>
.acitons-height {
  height: 50px;
}
</style>
