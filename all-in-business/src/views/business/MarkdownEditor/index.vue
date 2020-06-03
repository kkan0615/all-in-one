<template>
  <v-row>
    <v-col
      cols="6"
      lg="6"
      xl="6"
      md="6"
      sm="6"
      xs="6"
    >
      <v-card
        :height="'80vh'"
        :dark="true"
      >
        <MarkdownEditor
          @marked="onMarked"
        />
      </v-card>
    </v-col>
    <v-col
      cols="6"
      lg="6"
      xl="6"
      md="6"
      sm="6"
      xs="6"
    >
      <v-card :dark="true">
        <PreviewHTML
          :input="input"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PreviewHTML from '@/components/PrivewHTML/index.vue'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'

@Component({
  name: 'BusinessMarkdownEditor',
  components: {
    MarkdownEditor,
    PreviewHTML
  }
})
export default class extends Vue {
  private input = ''

  public onMarked(input: string) {
    this.input = input
  }
}
</script>

<style lang="scss" scoped>
.overflow-scroll {
  height: 80vh;
  overflow-y: scroll;
}
</style>
