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
      <v-col
        :cols="12"
        :md="6"
        :lg="6"
        :xl="6"
      >
        <line-chart />
      </v-col>
      <v-col
        :cols="12"
        :md="6"
        :lg="6"
        :xl="6"
      >
        <simple-bar-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NumberCard from './components/card.vue'
import { numberCardOptions } from '@/views/Dashboard/Main/data'
import { generatorIntegerRandom } from '@/utils/random'
import LineChart from '@/views/Dashboard/Main/components/lineChart.vue'
import SimpleBarChart from '@/views/Dashboard/Main/components/simpleBarChart.vue'

@Component({
  name: 'MainDashboard',
  components: {
    SimpleBarChart,
    LineChart,
    NumberCard
  }
})
export default class MainDashboard extends Vue {
  private numberCardOptions = numberCardOptions

  created () {
    this.numberCardOptions = numberCardOptions.map(numberCardOption => {
      numberCardOption.value = generatorIntegerRandom(99999)
      return numberCardOption
    })
  }
}
</script>
