const description = 'Hi! I am Dhruv Bhanushali, a software-developer who is ' +
  'always up for a solving a challenging problem or implementing an ' +
  'interesting idea.'

const contact = {
  path: '/contact',
  name: 'contact',
  meta: {
    title: 'Contact',
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
  component: () => import(/* webpackChunkName: "contact" */ '@/templates/contact/Contact')
}

export default contact
