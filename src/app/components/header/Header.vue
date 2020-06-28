<template>
  <header class="header">
    <Anchor
      v-shortkey="['h']"
      v-bind="homeLink"
      class="nav-title-anchor"
      tabindex="0"
      color="red"
      :title="`[H] Go to ${homeLink.text}.`"
      @shortkey.native="$navigateTo(homeLink.to)">
      <h5 class="nav-title full">
        {{ $t('handle') }}
      </h5>
      <h5 class="nav-title short">
        {{ $t('initials') }}
      </h5>
    </Anchor>

    <nav class="links">
      <!-- @slot Content goes here -->
      <slot>
        <Anchor
          v-shortkey="[index+1]"
          v-for="(link, index) in links"
          v-bind="link"
          color="green"
          :key="index"
          :title="`[${index+1}] Go to ${link.text}.`"
          @shortkey.native="$navigateTo(link.to)"/>
      </slot>
    </nav>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </header>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCubes,
    faHandshake,
    faPenAlt,
    faPrayingHands,
    faUser
  } from '@fortawesome/free-solid-svg-icons'

  import Anchor from './pieces/anchor/Anchor'

  library.add(
    faCubes,
    faPenAlt,
    faUser,
    faHandshake,
    faPrayingHands
  )

  export default {
    name: 'Header',
    components: {
      Anchor
    },
    data () {
      return {
        homeLink: {
          to: { name: 'home' },
          text: 'the homepage',
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
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Header.scss">
</style>
