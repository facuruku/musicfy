import Home from '@/views/HomeView.vue'
import Auth from '@/views/AuthView.vue'
import ResetPassword from '@/views/ResetPasswordView.vue'
import About from '@/views/AboutView.vue'
import Manage from '@/views/ManageView.vue'
import Song from '@/views/SongView.vue'
import Error404 from '@/views/ErrorView.vue'

export const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: Auth
  },
  {
    name: 'resetPassword',
    path: '/auth/resetPassword',
    component: ResetPassword
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    /* beforeEnter: (to, from, next) => {
      next()
    }, */
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'error',
    path: '/:catchAll(.*)*',
    component: Error404
  }
]
