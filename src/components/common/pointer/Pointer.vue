<template>
  <div class="pointer" :class="pointerClasses">
    <div class="text">
      <!-- @slot Main text goes here -->
      <slot/>
    </div>
    <div class="punctuation">
      <!-- @slot Punctuation following the text goes here -->
      <slot name="punctuation">…</slot>
    </div>
    <div class="arrow">
      <Icon
        icon="arrow-right"
        :path="icons.arrowRight"/>
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  import arrowRight from '@/assets/icons/arrow-right.svg'

  export default {
    name: 'Pointer',
    mixins: [
      colored,
      focusable
    ],
    components: {
      Icon
    },
    data () {
      return {
        icons: {
          arrowRight
        }
      }
    },
    computed: {
      /**
       * Get the classes to use on the pointer.
       * @returns {Array} an array of all the classes to apply on the element
       */
      pointerClasses () {
        return [
          ...this.coloredClasses,
          {
            ...this.focusableClasses
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Pointer.scss"/>
