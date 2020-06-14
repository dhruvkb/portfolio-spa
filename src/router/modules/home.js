const description = 'Hi! I am Dhruv Bhanushali, a software developer who ' +
  'writes well-documented code, builds accessible interfaces and ships ' +
  'delightful apps.'

const home = {
  path: '/',
  name: 'home',
  meta: {
    title: 'Software developer & other things',
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
  component: () => import(/* webpackChunkName: "home" */ '@/templates/home/Home')
}

export default home
