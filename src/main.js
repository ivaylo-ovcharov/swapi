import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './css/style.scss'
import store from './store/index.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)


const app = createApp(App)
app.use(router)
app.use(store)
app.component('Fa', FontAwesomeIcon)

app.mount('#app')
