<!--
  Author: Youngjin Kwak
  CreatedAt: 09-05-2020
  UpdatedAt: 09-19-2020
  Description: Login index page
-->
<template>
  <v-container
    class="fill-height"
    fluid
  >
    <video
      id="myVideo"
      ref="backgroundVideo"
      autoplay
      muted
      loop
    >
      <source
        src="@/assets/video/loginBackground.mp4"
        type="video/mp4"
      >
    </video>
    <div class="video-content">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="8"
            xl="4"
          >
            <login-card />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import LoginCard from './components/loginCard.vue'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'Login',
  components: {
    LoginCard
  }
})
export default class Login extends Vue {
  @Ref() private readonly backgroundVideo!: HTMLVideoElement

  mounted () {
    console.log(this.backgroundVideo)
  }
}
</script>
<style lang="scss">
  #myVideo {
    position: fixed;
    right: 0;
    min-width: 100%;
    min-height: 100%;
  }

  .video-content {
    position: fixed;
    text-align: center;
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }
</style>
