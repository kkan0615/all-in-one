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
          <div id="post" class="pa-5" v-html="post" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessPostMenu from './components/menu.vue'
// import { PostMenusInterface } from './types/postMenus'

@Component({
  name: 'BusinessPost',
  components: {
    BusinessPostMenu
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
