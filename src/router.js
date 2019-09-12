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
      path: '/developer',
      name: 'developer',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/Developer/Developer')
    },
    {
      path: '/writer',
      name: 'writer',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/Writer/Writer')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/About/About')
    }
  ]
})
