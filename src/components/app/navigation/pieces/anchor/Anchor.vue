<template>
  <RouterLink
    v-shortkey="keyCombination"
    class="anchor"
    :class="linkClasses"
    tabindex="0"
    :to="to"
    @shortkey.native="handleShortkey">
    <!-- Content goes here -->
    <slot>
      <span
        v-if="text"
        class="text">
        {{ text }}
      </span>

      <Icon
        v-if="icon"
        :icon="icon"
        :path="path"
        fixed-width/>
    </slot>
  </RouterLink>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'
  import shortkeyed from '@/mixins/shortkeyed'

  /**
   * This component is one anchor link in a navbar.
   */
  export default {
    name: 'Anchor',
    mixins: [
      colored,
      shortkeyed
    ],
    components: {
      Icon
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
        type: String,
        required: true
      },
      /**
       * _the path to the icon for small screens_
       */
      path: {
        type: String,
        required: true
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
      },
      /**
       * _whether the link contains the site title and points to the home page_
       */
      isSiteTitle: {
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
            exact: this.isExact,
            'site-title': this.isSiteTitle
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Anchor.scss"/>
