<template>
  <section>
    <v-row>
      <v-col>
        <!-- <simple-line /> -->
        simpleLine
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import SimpleLine from '@/components/chart/line/simpleLine.vue'

@Component({
  name: 'BusinessMain'
  // components : {
  //   simpleLine
  // }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
