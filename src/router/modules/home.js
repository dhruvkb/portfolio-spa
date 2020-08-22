const home = {
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '@/templates/home/Home')
}

export default home
