<template>
  <div class="navigation">
    <RouterLink
      v-shortkey="['h']"
      :to="homeLink.to"
      :exact="homeLink.isExact"
      :title="homeLink.title"
      @shortkey.native="$navigateTo(homeLink.to)">
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
          v-shortkey="[index+1]"
          v-for="(link, index) in links"
          :key="index"
          :link="link"
          :title="`[${index+1}] Go to ${link.text}.`"
          @shortkey.native="$navigateTo(link.to)"/>
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
  import { faCubes, faHandshake, faHome, faPenAlt, faPrayingHands, faUser } from '@fortawesome/free-solid-svg-icons'

  import Heading from '@/components/Heading/Heading'
  import NavigationLink from '@/components/Navigation/NavigationLink'

  library.add(
    faHome,
    faCubes,
    faPenAlt,
    faUser,
    faHandshake,
    faPrayingHands
  )

  export default {
    name: 'Navigation',
    components: {
      Heading,
      NavigationLink
    },
    data () {
      return {
        homeLink: {
          to: '/',
          fullText: 'Dhruv Bhanushali',
          shortText: 'DB',
          icon: 'home',
          title: '[H] Go to the homepage.',
          isExact: true
        },
        links: [
          {
            to: { name: 'portfolio' },
            text: 'Portfolio',
            icon: 'cubes'
          },
          {
            to: { name: 'blog' },
            text: 'Blog',
            icon: 'pen-alt'
          },
          {
            to: { name: 'contact' },
            text: 'Contact',
            icon: 'handshake'
          },
          {
            to: { name: 'about' },
            text: 'About',
            icon: 'user'
          },
          {
            to: { name: 'credits' },
            text: 'Credits',
            icon: 'praying-hands'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
