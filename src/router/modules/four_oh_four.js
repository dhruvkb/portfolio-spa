const description = 'You\'re lost, aren\'t you? Hi lost! I am Dhruv ' +
  'Bhanushali, a software developer who built this site and is not ashamed ' +
  'of that joke at all.'

const fourOhFour = {
  path: '*',
  name: 'four_oh_four',
  meta: {
    title: '404',
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
  component: () => import(/* webpackChunkName: "four-oh-four" */ '@/templates/four_oh_four/FourOhFour')
}

export default fourOhFour
