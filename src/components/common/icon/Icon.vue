<template>
  <FontAwesomeIcon
    class="icon"
    :class="iconClasses"
    v-if="computedIconSet === 'fab'"
    :icon="icon"
    v-bind="$attrs"/>
  <svg
    v-else-if="computedIconSet === 'icons'"
    class="icon"
    :class="iconClasses"
    viewBox="0 0 512 512"
    v-bind="$attrs">
    <use :href="gHref"/>
  </svg>
  <span v-else>
    Unsupported icon set
  </span>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /**
   * This component is the recommended way to use icons in the project. It can
   * intelligently determine the icon set for a particular icon and then
   * render the SVG or delegate to the `FontAwesomeIcon` component.
   */
  export default {
    name: 'Icon',
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _the name, or unique identifier, of the icon_
       */
      icon: {
        type: [String, Array],
        required: true
      },
      /**
       * _whether the icon lies inside running text_
       *
       * Setting this to `true` set the icon height to `1em` by default.
       */
      isInline: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to use on the icon.
       * @returns {Array} an array of all the classes to apply on the element
       */
      iconClasses () {
        return [
          this.computedSet,
          {
            inline: this.isInline
          }
        ]
      },

      /**
       * Determine the icon set based on whether the icon prop passed to the
       * component is an Array or a String.
       * @returns {string} the name of the icon set to use
       */
      computedIconSet () {
        if (this.icon instanceof Array) {
          return 'fab'
        } else {
          return 'icons'
        }
      },
      /**
       * Get the file path to the group containing the SVG paths and shapes.
       * @returns {string} the path to the SVG emitted by Webpack
       */
      gHref () {
        const svg = require(`@/assets/${this.computedIconSet}/${this.icon}.svg`)
        return `${svg}#${this.icon}`
      }
    }
  }
</script>

<style scoped lang="scss" src="./Icon.scss"/>
