import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-green-600'
})

export default router
