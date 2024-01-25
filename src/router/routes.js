const Home = () => import('@/views/HomeView.vue')
const Auth = () => import('@/views/AuthView.vue')
const RegisterSuccess = () => import('@/views/registerSuccessView.vue')
const ResetPassword = () => import('@/views/ResetPasswordView.vue')
const About = () => import('@/views/AboutView.vue')
const Manage = () => import('@/views/ManageView.vue')
const Song = () => import('@/views/SongView.vue')
const Error404 = () => import('@/views/ErrorView.vue')

export const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: Auth
  },
  {
    name: 'registerSuccess',
    path: '/auth/registerSuccess',
    component: RegisterSuccess
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
