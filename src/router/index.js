import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router/routes'
import useUserStore from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-green-600'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()

  if (store.userLoggedIn) next()
  else next({ name: 'home' })
})

export default router
