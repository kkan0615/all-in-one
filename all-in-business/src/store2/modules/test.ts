import { MutationTree, ActionTree } from 'vuex'

export class Snackbar {
    declare content: string
    declare color: string

    constructor () {
        this.content = ''
        this.color = ''
    }
}

// TODO: Snackbar messages should be queued.
const state = new Snackbar()

const mutations = {
    showMessage (state, payload: Snackbar) {
        state.content = payload.content
        state.color = payload.color
    }
} as MutationTree<Snackbar>

const actions = {
} as ActionTree<Snackbar, never>

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
