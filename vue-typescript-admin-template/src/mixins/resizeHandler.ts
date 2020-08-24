/**
 * @TODO: 삭제하기, 아직 사용할일 없음...
 * @TODO: 다음 링크로 대체됨 : https://vuetifyjs.com/ko/customization/breakpoints/
 * */
import { Vue, Component } from 'vue-property-decorator'

@Component
export class ResizeHandlerMixins extends Vue {
  private _resizeHnadler () {
    const size = document.body.getBoundingClientRect().width
  }

  beforeMount () {
    window.addEventListener('resize', this._resizeHnadler)
  }

  mounted () {
    this._resizeHnadler()
  }

  beforeDestory () {
    window.removeEventListener('resize', this._resizeHnadler)
  }
}
