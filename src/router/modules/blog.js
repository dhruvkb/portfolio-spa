const blog = {
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
}

export default blog
