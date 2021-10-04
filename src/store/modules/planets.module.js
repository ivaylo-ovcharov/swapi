import axios from 'axios';
axios.defaults.baseURL = 'https://swapi.dev/api/';
 
export default {
    state: () => ({
        item: {},
        cache: {},
        loading: false
    }),

    getters: {
        getPlanet: (state) => state.item,
        getPlanetLoading: (state) => state.loading,
        getPlanetCache: (state) => state.cache,
    },

    mutations: {
        CHANGE_PLANET (state, payload) {
            state.item = payload
        },
        CHANGE_PLANET_CACHE (state, payload) {
            state.cache = {
                ...state.cache,
                [payload.type]: payload.data
            };
        },
        CHANGE_PLANET_LOADING (state, payload) {
          state.loading = payload
        }
    },
    actions: {
        fetchPlanet ({ commit, state }, planetUrl) {
            commit('CHANGE_PLANET_LOADING', true)
            if (!state.cache[planetUrl]) {
                axios.get(planetUrl).then((response) => {
                    commit('CHANGE_PLANET_CACHE', {
                        type: planetUrl,
                        data: {
                            item: response.data
                        } 
                    })

                    commit('CHANGE_PLANET', response.data)
                    commit('CHANGE_PLANET_LOADING', false)
                })
            } else {
                commit('CHANGE_PLANET', state.cache[planetUrl].item)
                commit('CHANGE_PLANET_LOADING', false)
            }
          }
    },
}
