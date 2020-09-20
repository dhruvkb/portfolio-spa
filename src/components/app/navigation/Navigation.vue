<template>
  <nav class="navigation" :class="navigationClasses">
    <Anchor
      v-for="(link, index) in navigation"
      v-bind="link"
      :path="paths[link.icon]"
      :key="index"
      :color="link.to.name === 'home' ? 'red' : 'green'"
      :key-combination="[index]"
      :title="`[${index}] Go to ${link.text}.`"
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
          person
        }
      }
    },
    props: {
      /**
       * _whether the component is being rendered on a mobile device_
       */
      isPhone: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to use on the navigation list.
       * @returns {Array} an array of all the classes to apply on the element
       */
      navigationClasses () {
        return [
          {
            phone: this.isPhone
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

<style scoped lang="scss" src="./Navigation.scss"/>
