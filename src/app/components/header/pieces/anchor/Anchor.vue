<template>
  <RouterLink
    class="anchor"
    :class="linkClasses"
    tabindex="0"
    :to="to">
    <!-- Content goes here -->
    <slot>
      <span
        v-if="text"
        class="text">
        {{ text }}
      </span>

      <FontAwesomeIcon
        v-if="icon"
        class="icon"
        :icon="['fas', icon]"
        fixed-width/>
    </slot>
  </RouterLink>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'

  /**
   * This component is one anchor link in a navbar.
   */
  export default {
    name: 'Anchor',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _the Vue Router destination to open when the anchor link is clicked_
       */
      to: {
        type: Object,
        required: true,
        validator: val => Object.prototype.hasOwnProperty.call(val, 'name')
      },
      /**
       * _the text to display in the anchor link_
       */
      text: {
        type: String
      },
      /**
       * _an icon for the anchor link that appears on screens too small for text_
       */
      icon: {
        type: String
      },
      /**
       * _whether the Vue Router link must be treated as exact_
       *
       * Set this to true for links that would otherwise always be active, like
       * the homepage for example.
       */
      isExact: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * Get the classes to use on the anchor link.
       * @returns {Array} an array of all the classes to apply on the element
       */
      linkClasses () {
        return [
          ...this.coloredClasses,
          {
            exact: this.isExact
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Anchor.scss">
</style>
