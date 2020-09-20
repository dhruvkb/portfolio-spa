<template>
  <nav class="navigation" :class="navigationClasses">
    <Anchor
      v-for="(link, index) in links"
      v-bind="link"
      :path="paths[link.icon]"
      :key="index"
      :color="link.to.name === 'home' ? 'red' : 'green'"
      :key-combination="[index+1]"
      :title="`[${index+1}] Go to ${link.text}.`"
      @shortkey="handleShortkey(link.to)"/>
  </nav>
</template>

<script>
  import Anchor from './pieces/anchor/Anchor'

  import navigation from '@/data/navigation.json'

  import face from '@/assets/icons/face.svg'
  import folder from '@/assets/icons/folder.svg'
  import document from '@/assets/icons/document.svg'
  import chat from '@/assets/icons/chat.svg'
  import person from '@/assets/icons/person.svg'
  import cog from '@/assets/icons/cog.svg'

  export default {
    name: 'Navigation',
    components: {
      Anchor
    },
    data () {
      return {
        navigation,
        paths: {
          face,
          folder,
          document,
          chat,
          person,
          cog
        }
      }
    },
    props: {
      isPhone: {
        type: Boolean
      }
    },
    computed: {
      navigationClasses () {
        return [
          {
            phone: this.isPhone
          }
        ]
      },

      links () {
        let links = navigation
        if (!this.isPhone) {
          links = links.filter(link => link.to.name !== 'home')
        }
        return links
      }
    },
    methods: {
      handleShortkey (destination) {
        this.$navigateTo(destination)
      }
    }
  }
</script>

<style scoped lang="scss" src="./Navigation.scss"/>
