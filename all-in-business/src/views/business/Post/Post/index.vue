<template>
  <div>
    <v-row>
      <v-col
        :class="isMobile ? '' : 'position-absolute'"
        cols="3"
        xl="2"
        lg="3"
        md="3"
        sm="12"
        xs="12"
      >
        <business-post-menu

          :menus="menus"
        />
      </v-col>
      <v-col
        :cols="9"
        xl="10"
        lg="9"
        md="9"
        sm="12"
        xs="12"
      >
        <v-card>
          <v-card-text v-html="post" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { samplePost } from './data/samplePost'
import BusinessPostMenu from './components/menu.vue'
// import { PostMenusInterface } from './types/postMenus'
import { DesignSettingModule } from '@/store/modules/designSetting'

@Component({
  name: 'BusinessPost',
  components: {
    BusinessPostMenu
  }
})
export default class extends Vue {
  private post ?: string
  private menus !: Array<HTMLHeadingElement>

  constructor() {
    super()
    this.post = samplePost
    this.menus = []
  }

  mounted() {
    this.createMenu()
  }

  private createMenu() {
    const tags = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    for (let i = 0; i < tags.length; i++) {
      const element = tags[i]
      element.setAttribute('id', `${i}tag`)
      this.menus.push(element as HTMLHeadingElement)
    }
  }

  private get isMobile() : boolean {
    return DesignSettingModule.isMobile
  }
}
</script>

<style lang="scss" scoped>
.position-absolute {
  position: sticky;
  top: 10%;
}
</style>
