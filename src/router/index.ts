import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SamplePage from '../views/SamplePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
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
