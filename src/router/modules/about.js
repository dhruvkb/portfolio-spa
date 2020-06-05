const about = {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '@/templates/about/About')
}

export default about
