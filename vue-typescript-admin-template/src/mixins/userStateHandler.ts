import { Vue, Component } from 'vue-property-decorator'
import { UserState } from '@/store/modules/user'

@Component
export class UserStateHandler extends Vue {
  private get isLoggedIn (): boolean {
    return !!this.$store.getters['user/token']
  }

  private get userInfo (): UserState {
    return this.$store.state.user
  }
}
