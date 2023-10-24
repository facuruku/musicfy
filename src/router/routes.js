import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Manage from '@/views/ManageView.vue'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'manage',
    // alias: '/manage',
    path: '/manage/music',
    component: Manage,
    beforeEnter: (to, from, next) => {
      next()
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]
