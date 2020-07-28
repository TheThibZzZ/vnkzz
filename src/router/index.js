import Vue from 'vue'
import Router from 'vue-router'
import CarPage from '@/pages/CarPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarPage',
      component: CarPage
    }
  ]
})
