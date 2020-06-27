<template>
  <div class="arrow-control" :class="arrowLinkClasses">
    <div class="text">
      <!-- @slot Main text goes here -->
      <slot/>
    </div>
    <div class="punctuation">
      <!-- @slot Punctuation following the text goes here -->
      <slot name="punctuation"/>
    </div>
    <div class="arrow">
      <FontAwesomeIcon
        :icon="['fas', 'arrow-right']"
        fixed-width/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  library.add(faArrowRight)

  export default {
    name: 'ArrowControl',
    mixins: [
      colored,
      focusable
    ],
    components: {
      FontAwesomeIcon
    },
    computed: {
      /**
       * Get the classes to use on the arrow control.
       * @returns {Array} an array of all the classes to apply on the element
       */
      arrowLinkClasses () {
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

<style scoped lang="scss" src="./ArrowControl.scss">
</style>
