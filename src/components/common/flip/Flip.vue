<template>
  <button
    v-shortkey="shortkey"
    class="flip"
    :class="flipClasses"
    @click="handleClick"
    @shortkey="handleShortkey">
    <span class="track">
      <span class="thumb">
        <!-- @slot Thumb content goes here -->
        <slot>&nbsp;</slot>
      </span>

      <span class="left content">
        <!-- @slot Left side content goes here -->
        <slot name="left"><Icon icon="chevron-left"/></slot>
      </span>

      <span class="right content">
        <!-- @slot Right side content goes here -->
        <slot name="right"><Icon icon="chevron-right"/></slot>
      </span>
    </span>
  </button>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  /**
   * This component renders a flip switch.
   */
  export default {
    name: 'Flip',
    mixins: [
      colored
    ],
    components: {
      Icon
    },
    model: {
      prop: 'isFlipped',
      event: 'flip'
    },
    props: {
      /**
       * _the keyboard shortcut for the switch to flip_
       */
      shortkey: {
        type: Array,
        required: true
      },
      /**
       * _whether the switch is flipped over_
       */
      isFlipped: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * Get the classes to use on the flip switch.
       * @returns {Array} an array of all the classes to apply on the element
       */
      flipClasses () {
        return [
          ...this.coloredClasses,
          {
            flipped: this.isFlipped
          }
        ]
      }
    },
    methods: {
      /**
       * Emit a 'flip' event when the switch is toggled by either clicking or
       * pressing the shortcut key combination.
       */
      emitFlip () {
        this.$emit('flip', !this.isFlipped)
      },

      handleClick () {
        this.emitFlip()
      },
      handleShortkey () {
        this.emitFlip()
      }
    }
  }
</script>

<style scoped lang="scss" src="./Flip.scss"/>
