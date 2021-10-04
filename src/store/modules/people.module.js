import axios from 'axios';
import queryBuilder from '../../lib/queryBuilder';
axios.defaults.baseURL = 'https://swapi.dev/api/';
 
export default {
    state: () => ({
        items: {},
        cache: {},
        count: 0,
        loading: false,
    }),

    getters: {
        getPeople: (state) => state.people,
        getPeopleCount: (state) => state.count,
        getPeopleLoading: (state) => state.loading,
        getPeopleCache: (state) => state.cache,
    },

    mutations: {
        CHANGE_PEOPLE (state, payload) {
            state.people = payload
        },
        CHANGE_PEOPLE_CACHE (state, payload) {
            state.cache = {
                ...state.cache,
                [payload.type]: payload.data
            };
        },
        CHANGE_COUNT (state, payload) {
          state.count = payload
        },
        CHANGE_LOADING (state, payload) {
          state.loading = payload
      },
    },
    actions: {
        fetchPeople ({ commit, state }, queryValues) {
            commit('CHANGE_LOADING', true)
            const requestUrl = queryBuilder('people', queryValues)
            if (!state.cache[requestUrl]) {
                axios.get(requestUrl).then((response) => {
                    
                    commit('CHANGE_PEOPLE_CACHE', {
                        type: requestUrl,
                        data: {
                            items: response.data.results,
                            count: response.data.count
                        } 
                    })

                    commit('CHANGE_PEOPLE', response.data.results)
                    commit('CHANGE_COUNT', response.data.count)
                    commit('CHANGE_LOADING', false)
                  })
            } else {
                commit('CHANGE_PEOPLE', state.cache[requestUrl].items)
                commit('CHANGE_COUNT', state.cache[requestUrl].count)
                commit('CHANGE_LOADING', false)
            }
            
          }
    },
}
