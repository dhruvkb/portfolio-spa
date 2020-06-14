const description = 'Hi! I am Dhruv Bhanushali, a software developer among ' +
  'other things. If you would like to know more about my work, you should ' +
  'start here.'

const portfolio = {
  path: '/portfolio',
  component: () => import(/* webpackChunkName: "portfolio" */ '@/templates/portfolio/Portfolio'),
  children: [
    {
      path: '',
      name: 'portfolio',
      meta: {
        title: 'Portfolio',
        tags: [
          {
            name: 'description',
            content: description
          },
          {
            property: 'og:description',
            content: description
          }
        ]
      },
      component: () => import(/* webpackChunkName: "portfolio-home" */ '@/templates/portfolio/subpages/home/Home')
    },
    {
      path: 'work/:slug',
      name: 'work',
      meta: {
        // Title set inside component
        tags: [
          {
            name: 'description',
            content: description
          },
          {
            property: 'og:description',
            content: description
          }
        ]
      },
      component: () => import(/* webpackChunkName: "portfolio-work" */ '@/templates/portfolio/subpages/work/Work'),
      props: true
    }
  ]
}

export default portfolio
