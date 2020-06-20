<template>
  <button
    v-shortkey="[arrowKey]"
    class="scroll"
    :class="scrollClasses"
    :title="`[${titleEmoji}] See the ${direction} role.`"
    @click="emitScroll"
    @shortkey="emitScroll">
    <FontAwesomeIcon
      class="icon"
      :icon="['fas', pointingIcon]"
      fixed-width/>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faAngleLeft,
    faAngleRight
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'

  library.add(faAngleLeft, faAngleRight)

  export default {
    name: 'Scroll',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon
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
       * Get the Font Awesome icon name for the icon representing this button.
       * @return {string} - the name of the Font Awesome icon to use
       */
      pointingIcon () {
        return this.direction === 'next' ? 'angle-right' : 'angle-left'
      },
      /**
       * Get the arrow emoji depicting the arrow key that triggers the button.
       * @return {string} - the arrow emoji for the arrow key trigger
       */
      titleEmoji () {
        return this.direction === 'next' ? '➡️' : '⬅️'
      },
      /**
       * Get the key code of the arrow key that should trigger the button.
       * @return {string} - the arrow key code which should trigger this button
       */
      arrowKey () {
        return this.direction === 'next' ? 'arrowright' : 'arrowleft'
      },
      /**
       * Get the delta by which to move the tickers. This ticker is emitted with
       * the event when the button is clicked or activated with the shortkey.
       * @return {number} - the delta for the tickers
       */
      delta () {
        return this.direction === 'next' ? 1 : -1
      }
    },
    methods: {
      /**
       * Emit a scroll event when the button is triggered by clicking on it or
       * pressing the shortkey.
       */
      emitScroll () {
        this.$emit('scroll', this.delta)
      }
    }
  }
</script>

<style scoped lang="scss" src="./Scroll.scss">
</style>
