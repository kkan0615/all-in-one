<template>
  <v-card>
    <v-dialog
      v-model="dialogVisible"
      max-width="300"
    >
      <v-card>
        <v-card-title class="headline">Add new music</v-card-title>

        <v-card-text>
          <v-form
            ref="musicFormRef"
          >
            <v-text-field
              v-model="musicForm.title"
              label="title"
              :rules="[rules.requiredRules]"
              single-line
              outlined
            />
            <v-text-field
              v-model="musicForm.author"
              label="author"
              single-line
              outlined
            />
            <v-text-field
              v-model="musicForm.image"
              label="image"
              :rules="[rules.requiredRules]"
              single-line
              outlined
            />
            <v-text-field
              v-model="musicForm.address"
              label="address Link"
              :rules="[rules.requiredRules]"
              single-line
              outlined
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />

          <v-btn
            text
            @click="onClickAdd"
          >
            Add
          </v-btn>

          <v-btn
            text
            @click="onClickClose"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card-text>
      <v-row>
        <v-btn
          v-if="$data._loopStatus === 0"
          icon
          @click="onClickLoopStatus"
        >
          <v-icon>repeat</v-icon>
        </v-btn>
        <v-btn
          v-else-if="$data._loopStatus === 1"
          icon
          @click="onClickLoopStatus"
        >
          <v-icon>repeat_one</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="dialogVisible = true"
        >
          <v-icon>playlist_add</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
    <draggable v-model="computedMusicList" @start="drag=true" @end="onMoveListElement">
      <v-card
        v-for="(item, i) in musicList"
        :key="i"
      >
        <v-card-text>
          <v-row>
            <v-col>
              {{ item.title }}
            </v-col>
            <v-col>
              {{ item.author }}
            </v-col>
            <v-col
              align="end"
              justify="end"
            >
              <v-icon>reorder</v-icon>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </draggable>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { LoopStatusEnum } from '../types/loopStatus'
import { MusicInterface } from '@/components/MusicControl/types'
import { requiredRules } from '@/utils/FormValidationUtils'
import draggable from 'vuedraggable'

@Component({
  name: 'BusinessMusicListSetting',
  components: {
    draggable
  }
})
export default class extends Vue {
  @Prop() private currentMusic !: MusicInterface
  @Prop({ default: false }) private random !: boolean
  @Prop({ default: 0 }) private loopStatus !: LoopStatusEnum
  @Prop() private musicList !: Array<MusicInterface>

  /**
   *  normal
   *  loop
   *  good
   */
  private _loopStatus !: LoopStatusEnum
  private _random !: boolean
  private dialogVisible !: boolean
  private musicAddress !: string
  private musicForm !: MusicInterface
  private rules = {
    requiredRules
  }

  constructor() {
    super()
    this._loopStatus = this.loopStatus
    this._random = this.random
    this.dialogVisible = false
    this.musicAddress = ''
    this.musicForm = {}
  }

  $refs !: {
    musicFormRef: HTMLFormElement
  }

  /**
   * name
   */
  public onClickLoopStatus() {
    switch (this.$data._loopStatus) {
      case 0:
        this.$data._loopStatus = 1
        break

      case 1:
        this.$data._loopStatus = 0
        break

      default:
        this.$data._loopStatus = 0
        break
    }

    this.$emit('onClickLoopStatus', this.$data._loopStatus)
  }

  public get computedMusicList() : Array<MusicInterface> {
    return this.musicList
  }

  public set computedMusicList(v : Array<MusicInterface>) {
    this.$emit('setMusicList', v)
  }

  /**
   * onClickClose
   */
  public onClickClose() {
    this.musicForm = {}
    this.dialogVisible = false
  }

  /**
   * onClickAdd
   */
  public onClickAdd() {
    const validation = this.$refs.musicFormRef.validate()

    if (validation) {
      this.musicList.push(this.musicForm)
      this.$nextTick(() => {
        this.onClickClose()
      })
    }
  }

  public onMoveListElement(e: any) {
    e.draggable = false
    this.$emit('onChangeCurrentIndex', e.newIndex)
  }
}
</script>

<style lang="scss" scoped>
</style>
