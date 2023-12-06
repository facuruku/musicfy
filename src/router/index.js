import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'
import useUserStore from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-green-600'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const store = useUserStore()

  if (!requiresAuth || store.userLoggedIn) {
    next()
    return
  } else {
    next({ name: 'auth' })
  }
})

export default router
