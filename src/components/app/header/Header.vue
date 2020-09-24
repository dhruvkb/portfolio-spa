<template>
  <header class="header">
    <Anchor
      v-bind="homeLink"
      class="home-anchor"
      tabindex="0"
      :key-combination="['h']"
      color="red"
      :title="`[H] Go to ${homeLink.text}.`"
      is-site-title
      @shortkey="handleShortkey(homeLink.to)">
      <SiteTitle is-small/>
    </Anchor>

    <Navigation/>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </header>
</template>

<script>
  import Anchor from '@/components/app/navigation/pieces/anchor/Anchor'
  import Navigation from '@/components/app/navigation/Navigation'
  import SiteTitle from '@/components/home/site_title/SiteTitle'

  import face from '@/assets/icons/face.svg'

  export default {
    name: 'Header',
    components: {
      Anchor,
      Navigation,
      SiteTitle
    },
    data () {
      return {
        homeLink: {
          to: { name: 'home' },
          text: 'the homepage',
          isExact: true,
          icon: 'face',
          path: face
        }
      }
    },
    methods: {
      handleShortkey (destination) {
        this.$navigateTo(destination)
      }
    }
  }
</script>

<style scoped lang="scss" src="./Header.scss"/>
