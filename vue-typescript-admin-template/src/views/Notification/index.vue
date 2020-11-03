`<!--<template>-->
<!--  <div>-->
<!--    <top-filter-->
<!--      :title="$route.meta.title"-->
<!--      subtitle="Describe how notification socket works!"-->
<!--    />-->
<!--    <v-card-->
<!--      color="secondary"-->
<!--    >-->
<!--      <v-card-text>-->
<!--        <v-text-field-->
<!--          v-model="title"-->
<!--          label="title"-->
<!--          outlined-->
<!--        />-->
<!--        <v-text-field-->
<!--          v-model="content"-->
<!--          label="content"-->
<!--          outlined-->
<!--        />-->
<!--        <v-radio-group-->
<!--          v-model="selectedTestType"-->
<!--          row-->
<!--        >-->
<!--          <v-radio-->
<!--            label="To User"-->
<!--            value="User"-->
<!--          />-->
<!--          <v-radio-->
<!--            label="To Role"-->
<!--            value="Role"-->
<!--          />-->
<!--          <v-radio-->
<!--            label="To All"-->
<!--            value="All"-->
<!--          />-->
<!--        </v-radio-group>-->
<!--        <v-select-->
<!--          v-if="selectedTestType === 'User'"-->
<!--          v-model="toWho"-->
<!--          label="To who?"-->
<!--          outlined-->
<!--          :items="userList"-->
<!--          item-text="nickname"-->
<!--          item-value="_id"-->
<!--        />-->
<!--        <v-select-->
<!--          v-if="selectedTestType === 'Role'"-->
<!--          v-model="toRole"-->
<!--          label="To who?"-->
<!--          outlined-->
<!--          :items="rolesList"-->
<!--          item-text="name"-->
<!--          item-value="_id"-->
<!--        />-->
<!--      </v-card-text>-->
<!--      <v-card-actions-->
<!--        class="justify-end pa-2"-->
<!--      >-->
<!--        <v-btn-->
<!--          color="primary"-->
<!--          @click="sendNotification"-->
<!--        >-->
<!--          Send To who-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Component, Vue } from 'vue-property-decorator'-->
<!--import { NotificationState } from '@/store/modules/alert'-->
<!--import moment from 'moment'-->
<!--import { RoleState, UserState } from '@/store/modules/user'-->
<!--import { ResponseParam } from '@/types/ServerResponse/auth'-->
<!--import TopFilter from '@/components/TopFIlter/index.vue'-->

<!--@Component({-->
<!--  name: 'NotificationExample',-->
<!--  components: {-->
<!--    TopFilter-->
<!--  }-->
<!--})-->
<!--export default class NotificationExample extends Vue {-->
<!--  private content = ''-->
<!--  private title = ''-->
<!--  private toWho = this.$store.getters['user/userId']-->
<!--  private toRole = this.$store.getters['user/role']._id-->
<!--  private userList: Array<UserState> = []-->
<!--  private rolesList: Array<RoleState> = []-->
<!--  private selectedTestType: 'User' | 'Role' | 'All' = 'User'-->

<!--  async created () {-->
<!--    await this.loadUserList()-->
<!--    await this.loadRoleList()-->
<!--  }-->

<!--  mounted () {-->
<!--    this.$notiSocket.on('addNotification', (data: NotificationState) => {-->
<!--      console.log(data)-->
<!--    })-->
<!--  }-->

<!--  private async loadUserList () {-->
<!--    this.userList = (await this.$http.get<ResponseParam<UserState>>('user/users')).data.recordSets || []-->
<!--  }-->

<!--  private async loadRoleList () {-->
<!--    this.rolesList = (await this.$http.get<ResponseParam<RoleState>>('user/roles')).data.recordSets || []-->
<!--    console.log(this.rolesList)-->
<!--  }-->

<!--  private sendNotification () {-->
<!--    if (!this.title || !this.content) return-->
<!--    console.log(this.selectedTestType)-->
<!--    switch (this.selectedTestType) {-->
<!--      case 'User':-->
<!--        this.sendToUser()-->
<!--        break-->
<!--      case 'Role':-->
<!--        this.sendToRole()-->
<!--        break-->
<!--    }-->
<!--  }-->

<!--  private sendToUser () {-->
<!--    this.$notiSocket.emit('sendUserNotification', {-->
<!--      type: 'info',-->
<!--      date: moment().format('llll'),-->
<!--      authorId: this.$store.state.user._id,-->
<!--      title: this.title,-->
<!--      content: this.content-->
<!--    } as NotificationState, this.toWho)-->
<!--  }-->

<!--  private sendToRole () {-->
<!--    this.$notiSocket.emit('sendRoleNotification', {-->
<!--      type: 'info',-->
<!--      date: moment().format('llll'),-->
<!--      authorId: this.$store.state.user._id,-->
<!--      title: this.title,-->
<!--      content: this.content-->
<!--    } as NotificationState, this.toWho)-->
<!--  }-->


<!--}-->
<!--</script>-->
`
