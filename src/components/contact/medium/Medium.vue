<template>
  <a
    tabindex="0"
    class="medium"
    :style="mediumStyles"
    :href="link"
    target="_blank">
    <Repr
      :path="path"
      fixed-width/>
    {{ name }}
  </a>
</template>

<script>
  import Repr from '@/components/common/repr/Repr'

  /**
   * This component is a link to one of my social media presences.
   */
  export default {
    name: 'Medium',
    components: {
      Repr
    },
    props: {
      /**
       * _the name of the social media site_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the path to draw the logo of the social media site_
       */
      path: {
        type: String,
        required: true
      },
      /**
       * _the signature brand color of the social media site_
       *
       * If not specified, the color is set to black for light themes and white
       * for dark ones.
       */
      color: {
        type: String
      },
      /**
       * _the link to my profile on the social media site_
       */
      link: {
        type: String,
        required: true,
        validator: val => val.match(/^https:\/\/[\w./]+$/)
      }
    },
    computed: {
      /**
       * Get the styles to apply on the social media link.
       * @returns {Object} an mapping of CSS properties and values to apply on the element
       */
      mediumStyles () {
        if (this.color) {
          return {
            '--medium-color': `#${this.color}`
          }
        } else {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Medium.scss"/>
