<template>
  <v-card>
    <v-card-text
      @click="visibleDetail = !visibleDetail"
    >
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <v-img
          v-if="!visibleDetail"
          :height="200"
          :src="img"
        />
        <v-card
          v-if="visibleDetail && detail"
          :height="200"
        >
          <v-card-title>
            {{ detail.title }}
          </v-card-title>
          <v-card-text>
            {{ detail.author }}
          </v-card-text>
        </v-card>
      </transition>
    </v-card-text>

    <audio
      ref="musicControlerRef"
      :src="src"
      :loop="loop"
      :autoplay="autoPlay"
      @ended="onEnded"
      @canplay="onCanPlay"
    />
    <v-card-text>
      <v-row
        dense
        no-gutters
        @mouseleave="onMouseleaveVolumeIcon"
      >
        <v-col
          align="center"
          justify="center"
          :cols="12"
        >
          <v-btn
            v-if="prevButton"
            icon
            @click="onClickPrevButton"
          >
            <v-icon>fast_rewind</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="stop"
          >
            <v-icon>stop</v-icon>
          </v-btn>
          <v-btn
            v-if="status === 'pause'"
            icon
            @click="play"
          >
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <v-btn
            v-else-if="status === 'playing'"
            icon
            @click="pause"
          >
            <v-icon>pause</v-icon>
          </v-btn>
          <v-btn
            v-if="nextButton"
            icon
            @click="onClickNextButton"
          >
            <v-icon>fast_forward</v-icon>
          </v-btn>
          <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
                @click="onClickVolumeIcon"
                @mouseover="onMouseoverVolumeIcon"
              >
                <v-icon>{{ volumeIcon }}</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-slider
                v-model="volume"
                :max="100"
                :vertical="true"
                @click="changeVolume"
              />
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-slider
        v-model="currentTime"

        hide-details
        :max="duration"
        @click="onClickTime"
      />
      <v-row>
        <v-col
          :cols="6"
        >
          <!-- {{ Math.round(currentTime / 60) }}:{{ Math.round(currentTime % 60) }} -->
          {{ timeStampFormatter(currentTime) }}
        </v-col>
        <v-col
          align="end"
          justify="end"
          :cols="6"
        >
          <!-- {{ Math.round(duration / 60) }}:{{ Math.round(duration % 60) }} -->
          {{ timeStampFormatter(duration) }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import { timeStampFormatter } from '@/utils/TimeStamp'

@Component({
  name: 'MusicControler',
  components: {
  }
})
export default class extends Vue {
  @Prop() private src !: string
  @Prop({ default: false }) private autoPlay !: boolean
  @Prop({ default: false }) private loop !: boolean
  @Prop({ default: false }) private nextButton !:boolean
  @Prop({ default: false }) private prevButton !:boolean
  @Prop({ default: false }) private img !: string
  @Prop({ default: 80 }) private initSound !: number
  @Prop() private detail !: object

  /**
 * Status Document
 * playing: audio is runing
 * pause: audio is stopped
 */
  private status !: string
  private duration !: number
  private currentTime !: number
  private interval !: any
  private volumeVisible !: boolean
  private volume !: number
  private volumeIcon !: string
  private visibleDetail !: boolean

  public constructor() {
    super()
    this.status = this.autoPlay ? 'playing' : 'pause'
    this.duration = 0
    this.currentTime = 0
    this.volumeVisible = false
    this.volumeIcon = 'volume_up'
    this.volume = this.initSound
    this.visibleDetail = false
  }

  $refs!: {
    musicControlerRef: HTMLAudioElement
  }

  public onEnded() {
    if (this.loop) {
      this.onClickNextButton()
    } else {
      this.stop()
    }
  }

  public onCanPlay() {
    if (this.currentTime >= Math.round(this.duration)) {
      // this.onClickNextButton()
    }
    this.duration = this.$refs.musicControlerRef.duration
  }

  public play() {
    this.status = 'playing'
    this.timer()
    this.$refs.musicControlerRef.play()
  }

  public pause() {
    this.status = 'pause'
    this.clearTimer()
    this.$refs.musicControlerRef.pause()
  }

  public stop() {
    this.pause()
    this.currentTime = 0
    this.$refs.musicControlerRef.currentTime = 0
  }

  private timer() {
    this.interval = setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }

  private clearTimer() {
    clearInterval(this.interval)
  }

  public onClickTime() {
    if (this.status !== 'playing') {
      this.play()
    }
    this.$refs.musicControlerRef.currentTime = this.currentTime
  }

  public onMouseoverVolumeIcon() {
    this.volumeVisible = true
  }

  public onMouseleaveVolumeIcon() {
    this.volumeVisible = false
  }

  public onClickVolumeIcon() {
    if (this.volume === 0) {
      this.volume = 50
    } else {
      this.volume = 0
    }
    this.changeVolume()
  }

  public changeVolume() {
    /** Volume range is between 0 and 1 */
    this.$refs.musicControlerRef.volume = this.volume * 0.01
    if (this.volume === 0) {
      this.volumeIcon = 'volume_off'
    } else if (this.volume < 50) {
      this.volumeIcon = 'volume_down'
    } else {
      this.volumeIcon = 'volume_up'
    }
  }

  public onClickPrevButton() {
    this.stop()
    this.$emit('onPrev')
  }

  public onClickNextButton() {
    this.stop()
    this.$emit('onNext')
    this.$nextTick(() => {
      this.play()
    })
  }

  public timeStampFormatter(time: number) {
    return timeStampFormatter(time)
  }

  public beforedestroy() {
    this.clearTimer()
  }
}
</script>
<style lang="scss" scoped>

</style>
