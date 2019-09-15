<template>
  <div class="navigation">
    <RouterLink
      :to="homeLink.to"
      :exact="homeLink.isExact">
      <Heading
        class="full nav-title"
        :level="4"
        color="red">
        {{ homeLink.fullText }}
      </Heading>
      <Heading
        class="short nav-title"
        :level="4"
        color="red">
        {{ homeLink.shortText }}
      </Heading>
    </RouterLink>

    <nav class="links">
      <!-- @slot Content goes here -->
      <slot>
        <NavigationLink
          v-for="(link, index) in links"
          :key="index"
          :link="link"/>
      </slot>
    </nav>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faHome,
    faCode,
    faPenNib,
    faUser
  } from '@fortawesome/free-solid-svg-icons'

  import Heading from '@/components/Heading/Heading'
  import NavigationLink from '@/components/Navigation/NavigationLink'

  library.add(
    faHome,
    faCode,
    faPenNib,
    faUser
  )

  export default {
    name: 'Navigation',
    components: {
      Heading,
      NavigationLink
    },
    data: function () {
      return {
        homeLink: {
          to: '/',
          fullText: 'Dhruv Bhanushali',
          shortText: 'DB',
          icon: 'home',
          isExact: true
        },
        links: [
          {
            to: '/developer',
            text: 'Software developer',
            icon: 'code',
            isExact: false
          },
          {
            to: '/writer',
            text: 'Technical writer',
            icon: 'pen-nib',
            isExact: false
          },
          {
            to: '/about',
            text: 'About',
            icon: 'user',
            isExact: false
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
