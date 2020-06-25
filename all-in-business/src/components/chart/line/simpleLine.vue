<template>
  <div :class="className" :style="{height: height, width: width}" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as echarts from 'echarts'

@Component({
  name: 'lineBar'
})
export default class extends Vue {
  @Prop({ default: 'chart' }) private className !: string
  @Prop({ default: '100%' }) private width !: string
  @Prop({ default: '350px' }) private height !: string
  @Prop({ required: true }) private data !: object
  @Prop({ required: true }) private options !: object

  private chart !: echarts.ECharts | null

  constructor() {
    super()
    this.chart = null
  }

  mounted() {
    this.initChart()
  }

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
  }
}
</script>

<style lang="scss" scoped>

</style>
