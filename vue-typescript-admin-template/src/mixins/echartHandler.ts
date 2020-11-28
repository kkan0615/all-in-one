import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import echarts, { ECharts } from 'echarts'

@Component
export class EchartHandler extends Vue {
  @Prop({ default: () => Date.now().toString() + Math.random() + '' + 'line-chart' })
  private readonly id !: string
  @Prop({ required: true })
  private readonly option!: echarts.EChartOption
  @Prop({ required: true, type: String })
  private readonly title!: string
  @Prop({ required: false, default: '350px', type: String })
  private readonly height!: string
  @Prop({ required: false, default: '100%', type: String })
  private readonly width!: string

  private chart: ECharts | null = null

  @Watch('option', { deep: true })
  private onWatchOptionProp (newValue: echarts.EChartOption, oldValue: echarts.EChartOption) {
    if (newValue === oldValue) return
    if (this.chart) this.disposeChart()
    this.initChart()
  }

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

  @Emit('refresh')
  public refresh () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    this.initChart()

    return this.id
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
