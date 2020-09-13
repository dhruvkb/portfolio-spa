<template>
  <header class="header">
    <Anchor
      v-bind="homeLink"
      class="nav-title-anchor"
      tabindex="0"
      color="red"
      :key-combination="['h']"
      :title="`[H] Go to ${homeLink.text}.`"
      @shortkey="handleShortkey(homeLink.to)">
      <h5 class="nav-title full">@dhruvkb</h5>
      <h5 class="nav-title short">
        <Icon
          :icon="homeLink.icon"
          :path="homeLink.path"/>
        DB
      </h5>
    </Anchor>

    <Navigation/>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </header>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import Navigation from '@/components/app/navigation/Navigation'
  import Anchor from '@/components/app/navigation/pieces/anchor/Anchor'

  import face from '@/assets/icons/face.svg'

  export default {
    name: 'Header',
    components: {
      Icon,

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
