import { DesignSettingModule } from '@/store/modules/designSetting'
import { Vue, Component } from 'vue-property-decorator'

@Component
export class ResizeHandlerMixins extends Vue {
  private _resizeHnadler() {
    const size = document.body.getBoundingClientRect().width
    DesignSettingModule.setMobileSize(size)
  }

  beforeMount() {
    window.addEventListener('resize', this._resizeHnadler)
  }

  mounted() {
    this._resizeHnadler()
  }

  beforeDestory() {
    window.removeEventListener('resize', this._resizeHnadler)
  }
}
