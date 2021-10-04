const selectedTheme = localStorage.getItem('theme') ?  localStorage.getItem('theme') : 'light'

export default {
    state: () => ({
        theme: selectedTheme
    }),

    getters: {
        getTheme: (state) => state.theme,
    },

    mutations: {
        CHANGE_THEME (state, payload) {
            state.theme = payload
        }
    },
    actions: {
        changeTheme ({ commit }, theme) {
            localStorage.setItem('theme', theme)
            commit('CHANGE_THEME', theme)
        }
    },
}
