const contact = {
  path: '/contact',
  name: 'contact',
  component: () => import(/* webpackChunkName: "contact" */ '@/templates/contact/Contact')
}

export default contact
