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
          <number-field
            v-model="testNum"
          />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import NumberField from '@/components/Form/NumberField/index.vue'

@Component({
  name: 'Test',
  components: {
    NumberField,
    TopFilter
  }
})
export default class Test extends Vue {
  private testNum = '120000567'
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
