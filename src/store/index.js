import { createStore } from 'vuex'
import people from '../store/modules/people.module'
import planets from '../store/modules/planets.module'
import theme from '../store/modules/theme.module'


const store = createStore({
    modules: {
        people,
        planets,
        theme
    },
})

export default store
