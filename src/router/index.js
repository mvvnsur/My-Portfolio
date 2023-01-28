import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/portfolio.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/contacts.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/skills.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
