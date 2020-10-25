import vue from 'vue'
import ConfirmDialogComponent from '@/components/ConfirmDialog/index.vue'
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
  public async confirm (message: string, option = {} as ConfirmDialogOption) {
    return new Promise<boolean>(((resolve, reject) => {
      const data =  {
        content: message,
        ...option,
        status: false
      }

      const ComponentClass = vue.extend(ConfirmDialogComponent)
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
  Vue.prototype.$confirm = new ConfirmDialog()
}

export default ConfirmDialogPlugin
