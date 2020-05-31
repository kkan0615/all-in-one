<template>
  <v-list dense nav>
    <div v-for="(menu, i) in menus" :key="i">
      <v-list-item v-if="menu.tags.length === 0" :key="i">
        <v-row v-if="menu.name" :key="i" align="center">
          <v-col cols="6">
            <v-subheader v-if="menu.name">{{ menu.name }}</v-subheader>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn small text>content</v-btn>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-group v-else :key="i" value="true">
        <template v-slot:activator>
          <v-row :key="i" align="center">
            <v-col cols="6">
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-col>
            <!-- <v-col cols="6" class="text-right">
              <v-btn small text>content</v-btn>
            </v-col> -->
          </v-row>
        </template>
        <v-list-group v-for="(tag, j) in menus[i].tags" :key="j" no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon v-text="tag.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ tag.name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(subTag, k) in tag.subTags" :key="k" :to="{ path : `/${tag.link}/${subTag.link}` }">
            <v-list-item-icon>
              <v-icon v-text="subTag.icon" />
            </v-list-item-icon>
            <v-list-item-title>
              {{ subTag.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </div>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TabsInterface } from '@/layouts/components/bars/data'

@Component({
  name: 'NavList'
})
export default class extends Vue {
  private message = 'testChild message'
  @Prop() private menus!: TabsInterface

  created() {
    // 삭제해주세요.
    // console.log(this.menus)
  }
}
</script>

<style lang="scss" scoped>
</style>
