<template>
  <button
    v-shortkey="[arrowKey]"
    class="scroll"
    :class="scrollClasses"
    tabindex="-1"
    :title="`[${titleEmoji}] See the ${direction} role.`"
    @click="handleClick"
    @shortkey="handleShortkey">
    <Icon
      :icon="pointingIcon"
      :path="pointingPath"/>
  </button>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  import chevronLeft from '@/assets/icons/chevron-left.svg'
  import chevronRight from '@/assets/icons/chevron-right.svg'

  export default {
    name: 'Scroll',
    mixins: [
      colored
    ],
    components: {
      Icon
    },
    data () {
      return {
        icons: {
          chevronLeft,
          chevronRight
        }
      }
    },
    props: {
      /**
       * _the direction in which to scroll the memoji and role tickers_
       */
      direction: {
        type: String,
        validator: val => ['previous', 'next'].includes(val)
      }
    },
    computed: {
      /**
       * Get the classes to use on the scroll button.
       * @returns {Array} an array of all the classes to apply on the element
       */
      scrollClasses () {
        return [
          ...this.coloredClasses
        ]
      },
      /**
       * Get the Ionicons icon name for the icon representing this button.
       * @returns {string} the name of the Ionicons icon to use
       */
      pointingIcon () {
        return this.direction === 'next' ? 'chevron-right' : 'chevron-left'
      },
      /**
       * Get the Ionicons icon name for the icon representing this button.
       * @returns {string} the name of the Ionicons icon to use
       */
      pointingPath () {
        const chevronRight = this.icons.chevronRight
        const chevronLeft = this.icons.chevronLeft
        return this.direction === 'next' ? chevronRight : chevronLeft
      },
      /**
       * Get the arrow emoji depicting the arrow key that triggers the button.
       * @returns {string} the arrow emoji for the arrow key trigger
       */
      titleEmoji () {
        return this.direction === 'next' ? '➡️' : '⬅️'
      },
      /**
       * Get the key code of the arrow key that should trigger the button.
       * @returns {string} the arrow key code which should trigger this button
       */
      arrowKey () {
        return this.direction === 'next' ? 'arrowright' : 'arrowleft'
      },
      /**
       * Get the delta by which to move the tickers. This ticker is emitted with
       * the event when the button is clicked or activated with the shortkey.
       * @returns {number} the delta for the tickers
       */
      delta () {
        return this.direction === 'next' ? 1 : -1
      }
    },
    methods: {
      /**
       * Emit a 'scroll' event when the button is triggered by either clicking
       * or pressing the shortcut key combination.
       */
      emitScroll () {
        this.$emit('scroll', this.delta)
      },

      handleClick () {
        this.emitScroll()
      },
      handleShortkey () {
        this.emitScroll()
      }
    }
  }
</script>

<style scoped lang="scss" src="./Scroll.scss"/>
