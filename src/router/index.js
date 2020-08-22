import Vue from 'vue'
import Router from 'vue-router'

// Import modules per template
import home from '@/router/modules/home'
import portfolio from '@/router/modules/portfolio'
import blog from '@/router/modules/blog'
import contact from '@/router/modules/contact'
import about from '@/router/modules/about'
import fourOhFour from '@/router/modules/four_oh_four'

Vue.use(Router)

const router = new Router({
  routes: [
    home,
    portfolio,
    blog,
    contact,
    about,
    fourOhFour
  ],
  scrollBehavior: (to, from) => new Promise(resolve => {
    const scrollPreservingRoutes = []

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
    router.app.$root.$once('trigger-scroll', () => {
      resolve(position)
    })
  })
})

export default router
