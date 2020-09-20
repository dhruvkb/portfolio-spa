<template>
  <svg
    class="icon"
    :class="iconClasses"
    viewBox="0 0 512 512"
    v-bind="$attrs">
    <use :href="`${path}#${icon}`"/>
  </svg>
</template>

<script>
  /**
   * This component renders an SVG asset as an icon. It is primarily used to
   * render icons with SVGs from Ionicons.
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
       * _the path to the icon on the disk_
       */
      path: {
        type: String,
        required: true
      },
      /**
       * _whether the icon lies inside running text_
       *
       * Setting this to `true` sets the icon height to `1em` by default.
       */
      isInline: {
        type: Boolean
      },
      /**
       * _whether the icon is filled_
       */
      isSolid: {
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
            inline: this.isInline,
            solid: this.isSolid
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Icon.scss"/>
