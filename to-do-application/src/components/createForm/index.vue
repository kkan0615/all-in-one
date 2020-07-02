<template>
  <v-card>
    <v-card-text>
      <v-form
        ref="createFormRef"
      >
        <v-text-field
          ref="titleBox"
          v-model="todoForm.title"
          label="Title"
          :rules="[titleRules.required]"
          outlined
          clearable
        />
        <v-date-box
          v-model="todoForm.endDate"
          label="End date"
          :rules="[dateRules.required]"
          readonly
          outlined
        />
        <v-checkbox
          v-model="todoForm.endDate"
          label="All Day"
          outlined
        />
        <v-color-box
          v-model="todoForm.color"
          label="Color"
          :rules="[dateRules.required]"
          readonly
          outlined
        />
        <v-tip-tap-box
          v-model="todoForm.content"
          label="Color"
          :rules="[dateRules.required]"
          outlined
        />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            right
            outlined
            @click="submitForm"
          >
            Create
          </v-btn>
          <v-btn
            color="red"
            right
            outlined
            @click="resetForm"
          >
            Reset
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ToDoInterface } from '@/types/todo'

import VDateBox from '@/components/inputBox/dateBox/index.vue'
import VColorBox from '@/components/inputBox/colorBox/index.vue'
import VTipTapBox from '@/components/inputBox/tipTapBox/index.vue'

import { ToDoFakeData } from '@/data/fakeData/toDoFakeData'

@Component({
  name: 'ToDoCreateForm',
  components: {
    VDateBox,
    VColorBox,
    VTipTapBox
  }
})
export default class extends Vue {
  $refs !: {
    createFormRef: HTMLFormElement,
    titleBox: HTMLInputElement
  }

  private todoForm !: ToDoInterface

  private titleRules = {
    required: (value: any) => !!value || 'Title is required.'
  }

  private dateRules = {
    required: (value: any) => !!value || 'Date is required.'
  }

  constructor() {
    super()
    this.todoForm = this.resetDefaultToDoForm()
  }

  mounted() {
    this.$nextTick(() => {
      this.$refs.titleBox.focus()
    })
  }

  /**
   * @description Reset form to default
   * @returns ToDoInterface
   */
  private resetDefaultToDoForm(): ToDoInterface {
    return {
      title: '',
      content: '',
      color: '#2196F3FF',
      endDate: new Date().toISOString().substr(0, 10),
      status: 'working',
      tags: []
    }
  }

  private submitForm() {
    const valid = this.$refs.createFormRef.validate()
    if (!valid) {
      return
    } else {
      ToDoFakeData.push(this.todoForm)
      console.log(ToDoFakeData)

      this.$router.push({ name: 'ToDoList' })
    }
  }

  private resetForm() {
    this.$refs.createFormRef.resetValidation()
    this.todoForm = this.resetDefaultToDoForm()
    this.$nextTick(() => {
      this.$refs.titleBox.focus()
    })
  }
}
</script>
