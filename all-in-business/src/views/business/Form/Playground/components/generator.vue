<template>
  <v-card>
    <v-card-text>
      <form>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        />
      </form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Generator'

})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
