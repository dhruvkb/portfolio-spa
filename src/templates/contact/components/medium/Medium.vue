<template>
  <a
    tabindex="0"
    class="medium"
    :style="mediumStyles"
    :href="link">
    <FontAwesomeIcon
      :icon="['fab', logo]"
      fixed-width/>
    {{ name }}
  </a>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /**
   * This component is a link to one of my social media presences.
   */
  export default {
    name: 'Medium',
    components: {
      FontAwesomeIcon
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
       * _the logo of the social media site_
       */
      logo: {
        type: String,
        required: true
      },
      /**
       * _the signature brand color of the social media site_
       */
      color: {
        type: String,
        default: 'ffffff'
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
        return {
          '--medium-color': `#${this.color}`
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Medium.scss">
</style>
