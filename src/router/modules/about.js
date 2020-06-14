const description = 'Hi! I am Dhruv Bhanushali, a coffee-loving software ' +
  'developer among other things. If you want to know more about me, you ' +
  'should start here.'

const about = {
  path: '/about',
  name: 'about',
  meta: {
    title: 'About',
    tags: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'og:description',
        content: description
      }
    ]
  },
  component: () => import(/* webpackChunkName: "about" */ '@/templates/about/About')
}

export default about
