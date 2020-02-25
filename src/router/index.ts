import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SamplePage from '../views/SamplePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sample-page',
    name: 'sample-page',
    component: SamplePage
  }
]

const router = new VueRouter({
  routes
})

export default router
