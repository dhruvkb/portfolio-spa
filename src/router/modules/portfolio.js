const portfolio = {
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
}

export default portfolio
