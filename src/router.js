import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/templates/home/Home')
    },
    {
      path: '/portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ '@/templates/portfolio/Portfolio'),
      children: [
        {
          path: '',
          name: 'portfolio',
          component: () => import(/* webpackChunkName: "portfolio-home" */ '@/templates/portfolio/subpages/home/Home')
        },
        {
          path: 'work/:slug',
          name: 'work',
          component: () => import(/* webpackChunkName: "portfolio-work" */ '@/templates/portfolio/subpages/work/Work'),
          props: true
        }
      ]
    },
    {
      path: '/blog',
      component: () => import(/* webpackChunkName: "blog" */ '@/templates/blog/Blog'),
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import(/* webpackChunkName: "blog-home" */ '@/templates/blog/subpages/home/Home')
        },
        {
          path: 'post/:slug',
          name: 'post',
          component: () => import(/* webpackChunkName: "blog-post" */ '@/templates/blog/subpages/post/Post'),
          props: true
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '@/templates/contact/Contact')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/templates/about/About')
    },
    {
      path: '*',
      name: 'four_oh_four',
      component: () => import(/* webpackChunkName: "four-oh-four" */ '@/templates/four_oh_four/FourOhFour')
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
