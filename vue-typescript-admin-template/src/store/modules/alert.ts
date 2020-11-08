/**
 * @TODO: Socket과 notification.vue를 연결해서 사용할 예정
* */
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export interface NotificationState {
  _id: string | number;
  title: string;
  content: string;
  type: 'info' | 'success' | 'warning' | 'error';
  userId: string;
  authorId?: string;
  read: boolean;
  date: string;
}

export class SnackbarState {
  public content: string;
  public color: string;
  public timeout?: number
  public callback?: Function;
  public code?: number | string

  constructor (snackbarState?: SnackbarState) {
    this.content =  snackbarState?.content || ''
    this.color = snackbarState?.color || 'primary'
    this.timeout = snackbarState?.timeout || 5000
    this.callback = snackbarState?.callback
    this.code = snackbarState?.code || ''
  }
}

export class AlertStore {
  notifications: Array<NotificationState>
  snackbar: SnackbarState | null

  constructor (notificationState?: AlertStore) {
    this.notifications = notificationState?.notifications || []
    this.snackbar = new SnackbarState()
  }
}

const state = new AlertStore()

const mutations = {
  SET_NOTIFICATION (state, payload: Array<NotificationState>) {
    state.notifications = payload
  },
  addNotification (state, payload: NotificationState) {
    if (state.notifications.length > 20) {
      state.notifications.unshift()
    }
    state.notifications.push(payload)
  },
  removeNotification (state, payload: NotificationState) {
    const targetIndex = state.notifications.indexOf(payload)
    if (targetIndex > -1) {
      state.notifications.splice(targetIndex, 1)
    }
  },
  showSnackBar (state, payload: SnackbarState) {
    if (payload) {
      state.snackbar = null
      state.snackbar = new SnackbarState(payload)
    }
  }
} as MutationTree<AlertStore>

const getters = {
  notifications (state) {
    return state.notifications
  }
} as GetterTree<AlertStore, never>

const actions = {
  login () {
    console.log('test')
  }
} as ActionTree<AlertStore, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
