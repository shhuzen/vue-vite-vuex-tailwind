// store/index.js
import { createStore } from 'vuex'
import stack from './modules/stack'

const store = createStore({
    state: {
        username: '',
    },
    modules: {
        stack,
    },

    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.username = localStorage.getItem('username')
            } else {
                state.username = 'shhuzen'
            }
        },
        setUsername(state, username) {
            state.username = username
        },
    },
})

export default store
