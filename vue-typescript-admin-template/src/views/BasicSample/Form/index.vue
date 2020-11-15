<!--
  Author: Youngjin Kwak
  CreatedAt: 11-14-2020
  UpdatedAt: 11-14-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    <top-filter
      :title="$route.meta.title"
    />
    <simple-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'
import SimpleForm from '@/views/BasicSample/Form/components/SimpleForm.vue'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'BasicSampleForm',
  components: { SimpleForm, TopFilter },
})
export default class BasicSampleForm extends Vue {
}
</script>
