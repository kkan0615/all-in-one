<template>
  <div>
    <top-filter
      :title="$route.meta.title"
    />
    <div
      class="pa-4"
    >
      <v-card
        color="secondary"
        height="100vh"
      >
        <v-card-text>
          test page...
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'

@Component({
  name: 'Test',
  components: {
    TopFilter
  }
})
export default class Test extends Vue {
  created () {
    const splitPath = this.$route.fullPath.split('/')
    console.log(splitPath)
    this.$loading.openFullScreenLoading()
    setTimeout(() => {
      this.$loading.closeFullScreenLoading()
    }, 1000)
  }
}
</script>
