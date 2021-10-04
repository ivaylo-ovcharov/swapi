import { createStore } from 'vuex'
import people from '../store/modules/people'
import planets from '../store/modules/planets'
import theme from '../store/modules/theme'


const store = createStore({
    modules: {
        people,
        planets,
        theme
    },
})

export default store
