import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Manage from '@/views/ManageView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  }
]
