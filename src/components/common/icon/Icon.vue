<template>
  <svg
    class="icon"
    :class="iconClasses"
    viewBox="0 0 512 512"
    v-bind="$attrs">
    <use :href="gHref"/>
  </svg>
</template>

<script>
  /**
   * This component renders an SVG asset as an icon.
   */
  export default {
    name: 'Icon',
    props: {
      /**
       * _the name, or unique identifier, of the icon_
       */
      icon: {
        type: String,
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
          {
            inline: this.isInline
          }
        ]
      },

      /**
       * Get the file path to the group containing the SVG paths and shapes.
       * @returns {string} the path to the SVG emitted by Webpack
       */
      gHref () {
        const svg = require(`@/assets/icons/${this.icon}.svg`)
        return `${svg}#${this.icon}`
      }
    }
  }
</script>

<style scoped lang="scss" src="./Icon.scss"/>
