const description = 'Hi! I am Dhruv Bhanushali, a software developer who ' +
  'also loves to write. This is my blog and I regularly post stuff that you ' +
  'might enjoy.'

const blog = {
  path: '/blog',
  component: () => import(/* webpackChunkName: "blog" */ '@/templates/blog/Blog'),
  children: [
    {
      path: '',
      name: 'blog',
      meta: {
        title: 'Blog',
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
      component: () => import(/* webpackChunkName: "blog-home" */ '@/templates/blog/subpages/home/Home')
    },
    {
      path: 'post/:slug',
      name: 'post',
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
      component: () => import(/* webpackChunkName: "blog-post" */ '@/templates/blog/subpages/post/Post'),
      props: true
    }
  ]
}

export default blog
