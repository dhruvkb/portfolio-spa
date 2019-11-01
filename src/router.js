import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
      path: '/blog',
      component: () => import(/* webpackChunkName: "blog" */ '@/templates/Blog/Blog'),
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import(/* webpackChunkName: "blog-home" */ '@/templates/Blog/BlogHome')
        },
        {
          path: 'post/:slug',
          name: 'post',
          component: () => import(/* webpackChunkName: "post" */ '@/templates/Blog/BlogPost')
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '@/templates/Contact/Contact')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/About/About')
    },
    {
      path: '/credits',
      name: 'credits',
      component: () => import(/* webpackChunkName: "credits" */ '@/templates/Credits/Credits')
    },
    {
      path: '*',
      name: 'fourohfour',
      component: () => import(/* webpackChunkName: "four-oh-four" */ '@/templates/FourOhFour/FourOhFour')
    }
  ],
  scrollBehavior: (to, from) => new Promise(resolve => {
    const scrollPreservingRoutes = [
      'post'
    ]

    const position = {}
    if (
      from.name !== to.name &&
      !scrollPreservingRoutes.includes(to.name)
    ) {
      // Always scroll to the top
      position.x = 0
      position.y = 0
    }

    // Scroll is reset after leave, before enter transition
    router.app.$root.$once('triggerScroll', () => {
      resolve(position)
    })
  })
})

export default router
