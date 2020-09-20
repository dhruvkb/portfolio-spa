<template>
  <header class="header">
    <Anchor
      v-bind="homeLink"
      class="site-title-anchor"
      tabindex="0"
      :key-combination="['h']"
      :title="`[H] Go to ${homeLink.text}.`"
      is-site-title
      @shortkey="handleShortkey(homeLink.to)">
      <h5 class="site-title full">@dhruvkb</h5>
      <h5 class="site-title short">DB</h5>
    </Anchor>

    <Navigation/>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </header>
</template>

<script>
  import Navigation from '@/components/app/navigation/Navigation'
  import Anchor from '@/components/app/navigation/pieces/anchor/Anchor'

  import face from '@/assets/icons/face.svg'

  export default {
    name: 'Header',
    components: {
      Navigation,
      Anchor
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
