import { createRouter, createWebHistory } from 'vue-router'
import People from './pages/People.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: People
    }
  ]
})

export default router
