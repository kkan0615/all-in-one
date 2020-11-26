<!--
  Author: Youngjin Kwak
  CreatedAt: 11-26-2020
  UpdatedAt: 11-26-2020
  Description: Sample Vue Page
-->
<template>
  <v-card
    width="100%"
    color="secondary"
  >
    <v-card-title>
      Study
      <v-spacer />
      <v-btn
        icon
        @click="refresh"
      >
        <v-icon>cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <!--      :style="{height: height, width: width}"
-->
    <v-card-text>
      <div
        :id="id"
        :style="{height: '500px', width: '100%'}"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import echarts, { ECharts } from 'echarts'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'LineChart',
})
export default class LineChart extends Vue {
  @Prop({ default: () => Date.now().toString() + Math.random() + '' + 'line-chart' })
  private readonly id !: string

  private chart: ECharts | null = null
  private option: echarts.EChartOption = {
    color: [ this.$vuetify.theme.currentTheme.primary ? this.$vuetify.theme.currentTheme.primary.toString() : ''],
    textStyle: {
      color: this.$vuetify.theme.currentTheme.primary ? this.$vuetify.theme.currentTheme.primary.toString() : ''
    },
    grid: {
      width: 'auto',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };

  mounted () {
    if (!this.$vuetify.theme.currentTheme.primary) return

    this.$nextTick(() => {
      this.initChart()
    })

    window.addEventListener('resize', this.resizeChart)
  }

  beforeDestroy () {
    this.disposeChart()

    window.removeEventListener('resize', this.resizeChart)
  }

  public refresh () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    this.initChart()
  }

  private initChart () {
    this.chart = echarts.init(document.getElementById(this.id) as HTMLDivElement)
    this.chart.setOption(this.option)
  }

  private disposeChart () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  }

  private resizeChart () {
    if (this.chart) {
      this.chart.resize()
    }
  }
}
</script>
