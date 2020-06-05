const fourOhFour = {
  path: '*',
  name: 'four_oh_four',
  component: () => import(/* webpackChunkName: "four-oh-four" */ '@/templates/four_oh_four/FourOhFour')
}

export default fourOhFour
