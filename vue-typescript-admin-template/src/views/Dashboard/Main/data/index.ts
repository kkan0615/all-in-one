import { NumberCardOption } from '@/views/Dashboard/Main/types'
import { ChartOption } from '@/types/chartOption'
import {
  generatorColorRandom,
  generatorIntegerRandom,
  generatorIntegerRandomArray
} from '@/utils/random'
import vuetify from '@/plugins/vuetify'
import colors from 'vuetify/lib/util/colors'
import echarts from 'echarts'
import moment from 'moment'

function getVirtulData () {
  const year = moment().year()
  const date = + `${year}-01-01` //echarts.number.parseDate(year + '-01-01')
  const end = + `${year}-12-31` //echarts.number.parseDate(year + '-12-31')
  const dayTime = 3600 * 24 * 1000
  const data = []
  for (let time = date; time <= end; time += dayTime) {
    data.push([
      moment(time).format('yyyy-MM-dd'),
      generatorIntegerRandom(99999)
    ])
  }
  return data
}


export const numberCardOptions: Array<NumberCardOption> = [
  {
    _id: '001',
    title: 'Today workers',
    icon: 'person',
    value: 0,
    color: 'secondary'
  },
  {
    _id: '002',
    title: 'airplanes',
    icon: 'airplanemode_active',
    value: 0,
    color: 'secondary'
  },
  {
    _id: '003',
    title: 'Today Goal',
    icon: 'flag',
    value: 0,
    color: 'secondary'
  },
  {
    _id: '004',
    title: 'Weekly Goal',
    icon: 'outlined_flag',
    value: 0,
    color: 'secondary'
  }
]

export const chartOptions: Array<ChartOption> = [
  {
    _id: 'workload-line',
    key: 'workloadLine',
    title: 'Workload Line',
    lg: 4,
    xl: 4,
    md: 4,
    height: '400px',
    option: {
      color: generatorColorRandom(1),
      textStyle: {
        color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
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
        data: generatorIntegerRandomArray(1500, 7),
        type: 'line'
      }]
    }
  },
  {
    _id: 'workload-bar',
    key: 'workloadBar',
    title: 'Workload Bar',
    lg: 4,
    xl: 4,
    md: 4,
    height: '400px',
    option: {
      color: generatorColorRandom(1),
      textStyle: {
        color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
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
        data: generatorIntegerRandomArray(1500, 7),
        type: 'bar'
      }]
    }
  },
  {
    _id: 'factory-rate-polar',
    key: 'factoryRatePolar',
    title: 'Factory Utilization rate',
    lg: 4,
    xl: 4,
    md: 4,
    height: '400px',
    option: {
      color: generatorColorRandom(3),
      textStyle: {
        color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
      },
      legend: {
        show: true,
        data: ['china', 'korea', 'japan'],
        textStyle: {
          color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
        },
      },
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        z: 10
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: generatorIntegerRandomArray(1500, 7),
        coordinateSystem: 'polar',
        name: 'china',
        stack: 'a'
      }, {
        type: 'bar',
        data: generatorIntegerRandomArray(1500, 7),
        coordinateSystem: 'polar',
        name: 'korea',
        stack: 'a'
      }, {
        type: 'bar',
        data: generatorIntegerRandomArray(1500, 7),
        coordinateSystem: 'polar',
        name: 'japan',
        stack: 'a'
      }],
    }
  },
  {
    _id: 'week-admin-expense-line',
    key: 'wael',
    title: 'Weekly Administrative Expenses',
    lg: 8,
    xl: 8,
    md: 8,
    height: '400px',
    option: {
      tooltip: {
        trigger: 'axis',
      },
      color: generatorColorRandom(5),
      textStyle: {
        color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
      },
      legend: {
        data: ['Water', 'Electric', 'Heat', 'Fire', 'Others'],
        textStyle: {
          color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Water',
          type: 'line',
          data: generatorIntegerRandomArray(1500, 7)
        },
        {
          name: 'Electric',
          type: 'line',
          data: generatorIntegerRandomArray(1500, 7)
        },
        {
          name: 'Heat',
          type: 'line',
          data: generatorIntegerRandomArray(1500, 7)
        },
        {
          name: 'Fire',
          type: 'line',
          data: generatorIntegerRandomArray(1500, 7)
        },
        {
          name: 'Others',
          type: 'line',
          data: generatorIntegerRandomArray(1500, 7)
        }
      ]
    }
  },
  {
    _id: 'week-admin-expense-circle',
    key: 'waec',
    title: 'Weekly Administrative Expenses Circle',
    lg: 4,
    xl: 4,
    md: 4,
    height: '400px',
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      color: generatorColorRandom(5),
      legend: {
        orient: 'vertical',
        left: 12,
        data: ['Water', 'Electric', 'Heat', 'Fire', 'Others'],
        textStyle: {
          color: vuetify.preset.theme.dark ? colors.shades.white.toString() : colors.shades.black.toString()
        }
      },
      series: [
        {
          name: 'Tooltip',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: generatorIntegerRandom(1500, 2), name: 'Water' },
            { value: generatorIntegerRandom(1500, 2), name: 'Electric' },
            { value: generatorIntegerRandom(1500, 2), name: 'Heat' },
            { value: generatorIntegerRandom(1500, 2), name: 'Fire' },
            { value: generatorIntegerRandom(1500, 2), name: 'Others' }
          ]
        }
      ]
    }
  },
]
