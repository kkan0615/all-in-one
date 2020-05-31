<template>
  <div>
    <top-description
      :page-loaded="pageLoaded"
    />
    <transition name="slide-fade">
      <v-slide-group
        v-if="pageLoaded2"
        class="pa-4"
        dark
        show-arrows
      >
        <v-slide-item
          v-for="detail in details"
          :key="detail.id"
        >
          <div>
            <introduction-card
              :detail="detail"
            />
          </div>
        </v-slide-item>
      </v-slide-group>
    </transition>
    <transition name="slide-fade">
      <bottom-banner v-if="pageLoaded2" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { gql } from 'apollo-boost'
import IntroductionCard from './components/introductionCard.vue'
import TopDescription from './components/topDescription.vue'
import BottomBanner from './components/bottomBanner.vue'

import { details } from './data/details'

@Component({
  name: 'MainPage',
  components: {
    IntroductionCard,
    TopDescription,
    BottomBanner
  }
})
export default class extends Vue {
  private model = null
  private details = details
  private pageLoaded = false
  private pageLoaded2 = false

  mounted() {
    this.pageLoaded = true
    setTimeout(() => {
      this.pageLoaded2 = true
    }, 1500)
  }
}
</script>

<style scoped>
</style>
