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
      <h5 class="nav-title full">
        {{ $t('handle') }}
      </h5>
      <h5 class="nav-title short">
        <Icon icon="face"/>
        {{ $t('initials') }}
      </h5>
    </Anchor>

    <nav class="links">
      <!-- @slot Content goes here -->
      <slot>
        <Anchor
          v-for="(link, index) in links"
          v-bind="link"
          :key="index"
          color="green"
          :key-combination="[index+1]"
          :title="`[${index+1}] Go to ${link.text}.`"
          @shortkey="handleShortkey(link.to)"/>
      </slot>
    </nav>

    <div class="extras">
      <!-- @slot Extras go here -->
      <slot name="extras"/>
    </div>
  </header>
</template>

<script>
  import Anchor from './pieces/anchor/Anchor'
  import Icon from '@/components/common/icon/Icon'

  export default {
    name: 'Header',
    components: {
      Icon,
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
            icon: 'folder'
          },
          {
            to: { name: 'blog' },
            text: 'Blog',
            icon: 'megaphone'
          },
          {
            to: { name: 'contact' },
            text: 'Contact',
            icon: 'chat'
          },
          {
            to: { name: 'about' },
            text: 'About',
            icon: 'person'
          }
        ]
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
