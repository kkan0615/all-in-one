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
        <v-row>
          <v-col
            :cols="9"
          >
            <v-date-box
              v-model="todoForm.endDate"
              label="End date"
              readonly
              outlined
              @change="onChangeEndDateBox"
            />

          </v-col>
          <v-col>
            <v-checkbox
              v-model="allDay"
              label="All Day"
              outlined
              @change="onChangeAllDayBox"
            />
          </v-col>
        </v-row>
        <v-color-box
          v-model="todoForm.color"
          label="Color"
          :rules="[dateRules.required]"
          readonly
          outlined
        />

        <v-textarea
          v-model="todoForm.content"
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
            <div
              v-if="mode === 'create'"
            >
              Create
            </div>
            <div
              v-else
            >
              edit
            </div>
          </v-btn>
          <v-btn
            color="red"
            right
            outlined
            @click="resetForm"
          >
            Reset
          </v-btn>
          <v-btn
            color="red"
            right
            outlined
            @click="cancel"
          >
            cancel
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

import { ToDoFakeData } from '@/data/fakeData/toDoFakeData'

@Component({
  name: 'ToDoCreateForm',
  components: {
    VDateBox,
    VColorBox
  }
})
export default class extends Vue {
  $refs !: {
    createFormRef: HTMLFormElement,
    titleBox: HTMLInputElement
  }

  private todoForm !: ToDoInterface
  private allDay !: boolean
  private mode !: 'edit' | 'create'

  private titleRules = {
    required: (value: any) => !!value || 'Title is required.'
  }

  private dateRules = {
    required: (value: any) => !!value || 'Date is required.'
  }

  constructor() {
    super()
    this.todoForm = this.resetDefaultToDoForm()
    this.allDay = false
    this.mode = 'create'
  }

  created() {
    const id = this.$route.query.id
    if (id) {
      const todo = ToDoFakeData.find(e => e.id.toString() === id)

      if (!todo) {
        throw new Error(`${id} is not in data`)
      }
      this.todoForm = todo
      this.mode = 'edit'
    }
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
      id: ToDoFakeData.length,
      title: '',
      content: '',
      color: '#2196F3FF',
      endDate: new Date().toISOString().substr(0, 10),
      status: 'working',
      tags: []
    }
  }

  private onChangeAllDayBox() {
    if (this.allDay) {
      this.todoForm.endDate = ''
    } else {
      this.todoForm.endDate = new Date().toISOString().substr(0, 10)
    }
  }

  private onChangeEndDateBox() {
    this.allDay = false
  }

  private submitForm() {
    const valid = this.$refs.createFormRef.validate()
    if (!valid) {
      return
    } else {
      if (this.mode === 'create') {
        ToDoFakeData.push(this.todoForm)
      }
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

  private cancel() {
    this.$router.go(-1)
  }
}
</script>
