import vue from 'vue'
import ConfirmDialogComponent from '@/components/confirm-dialog/index.vue'
import vuetify from '@/plugins/vuetify'

export interface ConfirmDialogOption {
  title?: string;
  subtitle?: string;
  buttonNoText?: string;
  buttonNoColor?: string;
  buttonNoFlat?: boolean;
  buttonYesText?: string;
  buttonYesColor?: string;
  buttonYesFlat?: boolean;
  width?: string;
  persistent?: boolean;
  titleClass?: string;
  titleColor?: string;
  subtitleClass?: string;
  subtitleColor?: string;
  contentClass?: string;
  contentColor?: string;
}

export class ConfirmDialog  {
  // Constructor에서만 바인딩해주기에 readonly를 사용 할 것을 권장받음
  private readonly _vue: typeof vue | null = null

  constructor (vueCons: typeof vue) {
    if (!this._vue) this._vue = vueCons
  }

  public async confirm (message: string, option = {} as ConfirmDialogOption) {
    return new Promise(((resolve, reject) => {
      if (!this._vue) {
        reject({
          message: 'No vue has been passed'
        })
        return
      }

      const data =  {
        content: message,
        ...option,
        status: false
      }


      const ComponentClass = this._vue.extend(ConfirmDialogComponent)
      const ConfirmDialogInstance = new ComponentClass({
        vuetify,
        data,
        destroyed: () => {
          resolve(data.status)
        }
      })

      ConfirmDialogInstance.$mount()
    }))
  }

}

export function ConfirmDialogPlugin (Vue: typeof vue): void {
  Vue.prototype.$confirm = new ConfirmDialog(Vue)
}

export default ConfirmDialogPlugin
