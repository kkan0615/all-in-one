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
          <number-field
            v-model="testNum"
            label="'test Label'"
            :outlined="true"
            :rules="rules"
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
  private testNum = ''
  private rules = [
    (v: string) => !!v || 'Test error message'
  ]

  created () {
    const splitPath = this.$route.fullPath.split('/')
    this.$loading.openFullScreenLoading()
    setTimeout(() => {
      this.$loading.closeFullScreenLoading()
    }, 1000)
  }
}
</script>
