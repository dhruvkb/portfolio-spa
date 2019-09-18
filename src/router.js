import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/templates/Home/Home')
    },
    {
      path: '/portfolio/:dir([a-z_]*)?',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ '@/templates/Portfolio/Portfolio')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/About/About')
    }
  ]
})
