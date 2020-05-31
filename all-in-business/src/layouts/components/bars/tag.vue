<template>
  <div>
    <v-card
      flat
      class="pa-4"
    >
      <v-card-title>{{ tag.name }}</v-card-title>
      <v-divider />

      <v-list v-for="subTag in tag.subTags" :key="subTag.id" dense>
        <v-list-item :to="{ path : `/${tag.link}/${subTag.link}` }">
          <v-list-item-content>{{ subTag.name }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-divider
      class="mx-4"
      vertical
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SubTagsInterface } from './data/tabs'

@Component({
  name: 'TagBar'
})
export default class extends Vue {
  @Prop([Object]) private tag!: SubTagsInterface
}
</script>

<style scoped>

</style>
