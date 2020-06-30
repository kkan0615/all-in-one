<template>
  <v-app>
    <v-main fulid>
      <v-container
        class="fill-height"
        app
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
          class="mb-6"
        >
          <v-col
            cols="12"
            sm="12"
            md="11"
          >
            <transition name="fade-transform" mode="out-in" appear>
              <router-view :key="key" />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() private msg!: string;
  public get key(): string {
    console.log(this.$router)

    return this.$route.path
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
