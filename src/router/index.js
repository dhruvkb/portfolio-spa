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

router.beforeEach((to, from, next) => {
  const baseName = 'Dhruv Bhanushali'

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  if (nearestWithTitle) {
    document.title = `${baseName} - ${nearestWithTitle.meta.title}`
  } else {
    document.title = baseName
  }

  const setMetaTags = tags => {
    tags.map(tag => {
      const element = document.createElement('meta')
      Object.keys(tag).forEach(key => {
        element.setAttribute(key, tag[key])
      })
      element.setAttribute('data-vue-router', '')
      return element
    }).forEach(tag => {
      document.head.appendChild(tag)
    })
  }

  const baseDescription = 'Dhruv Bhanushali - software developer & other things'

  Array.from(document.querySelectorAll('[data-vue-router]')).forEach(element => {
    element.parentNode.removeChild(element)
  })
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.tags && r.meta.tags.length)
  if (nearestWithMeta) {
    setMetaTags(nearestWithMeta.meta.tags)
  } else {
    setMetaTags([
      {
        name: 'description',
        content: baseDescription
      },
      {
        property: 'og:description',
        content: baseDescription
      }
    ])
  }

  next()
})

export default router
