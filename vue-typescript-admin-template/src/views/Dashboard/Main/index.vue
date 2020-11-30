<template>
  <div>
    <v-row>
      <v-col
        v-for="numberCardOption in numberCardOptions"
        :key="numberCardOption._id"
        :cols="12"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <number-card
          :number-card-option="numberCardOption"
        />
      </v-col>
      <!--      <v-col-->
      <!--        :cols="12"-->
      <!--        :md="6"-->
      <!--        :lg="6"-->
      <!--        :xl="6"-->
      <!--      >-->
      <!--        <line-chart />-->
      <!--      </v-col>-->
      <!--      <v-col-->
      <!--        :cols="12"-->
      <!--        :md="6"-->
      <!--        :lg="6"-->
      <!--        :xl="6"-->
      <!--      >-->
      <!--        <simple-bar-chart />-->
      <!--      </v-col>-->
      <v-col
        v-for="chartOption in chartOptions"
        :key="chartOption._id"
        :cols="12"
        :md="chartOption.md"
        :lg="chartOption.lg"
        :xl="chartOption.xl"
      >
        <basic-chart
          :id="chartOption._id"
          :title="chartOption.title"
          :option="chartOption.option"
          :height="chartOption.height"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NumberCard from './components/card.vue'
import { chartOptions, numberCardOptions } from '@/views/Dashboard/Main/data'
import { generatorIntegerRandom } from '@/utils/random'
import LineChart from '@/views/Dashboard/Main/components/lineChart.vue'
import SimpleBarChart from '@/views/Dashboard/Main/components/simpleBarChart.vue'
import { ChartOption } from '@/types/chartOption'
import BasicChart from '@/components/chart/Basic/index.vue'

@Component({
  name: 'MainDashboard',
  components: {
    BasicChart,
    SimpleBarChart,
    LineChart,
    NumberCard
  }
})
export default class MainDashboard extends Vue {
  private numberCardOptions = numberCardOptions
  private chartOptions: Array<ChartOption> = chartOptions


  created () {
    this.numberCardOptions = numberCardOptions.map(numberCardOption => {
      numberCardOption.value = generatorIntegerRandom(99999)
      return numberCardOption
    })
  }
}
</script>
