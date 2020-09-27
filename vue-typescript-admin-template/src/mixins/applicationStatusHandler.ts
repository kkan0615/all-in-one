import { Vue, Component } from 'vue-property-decorator'

@Component
export class ApplicationStatusHandler extends Vue {
  private get displayRoutes () {
    return this.$store.state.menu.displayRoutes
  }

  private get navigationStatus (): boolean {
    return this.$store.state.app.navigatorStatus
  }

  private get appBarStatus (): boolean {
    return this.$store.state.app.appBarStatus
  }

  private get permanentStatus (): boolean {
    return this.$store.state.app.permanentStatus
  }

  private async changePermanentStatus () {
    await this.$store.dispatch('app/controlPermanentStatus')
  }

  private async changeAppBarStatus () {
    await this.$store.dispatch('app/controlAppBarStatus')
  }
}
