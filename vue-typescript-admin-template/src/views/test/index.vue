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
          <v-btn
            @click="test"
          >
            test
          </v-btn>

          <v-img
            height="300px"
            width="300px"
            src="http://127.0.0.1:8001/file/image/test/saketocat.png"
            @click="openWindow"
          />
          <v-img
            height="300px"
            width="300px"
            alt="error..."
            :src="testFile"
          />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import NumberField from '@/components/Input/NumberField/index.vue'

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
  private testFile = ''

  async created () {
    const splitPath = this.$route.fullPath.split('/')
    this.$loading.openFullScreenLoading()
    setTimeout(() => {
      this.$loading.closeFullScreenLoading()
    }, 1000)

    const test = await this.$http.post('file/image/loadImageByPost', {
      fileDirectory: 'test',
      fileName: 'saketocat.png'
    })

    this.testFile = test.data
    console.log(test)
  }

  private async test () {
    // const test = await this.$http.post('test/debug/big/socketRoute', {
    //   message: 'awesome'
    // })
    //
    // console.log(test)

    window.open('http://127.0.0.1:8001/file/image/download/test/saketocat.png')

    // download(blob, 'test.pdf')
  }

  private async openWindow () {
    // @TODO: process.env 에서 가져오기
    window.open('http://127.0.0.1:8001/file/image/test/saketocat.png')
  }
}
</script>
