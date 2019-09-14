<template>
  <blockquote class="blockquote" :class="blockquoteClasses">
    <div class="visual">
      <FontAwesomeIcon
        class="icon"
        :icon="['fas', 'quote-left']"
        fixed-width/>
    </div>
    <div class="content">
      <div class="quotation">
        <!-- @slot Content goes here -->
        <slot/>
      </div>
      <cite class="citation">
        <!-- @slot Citation goes here -->
        <slot name="citation"/>
      </cite>
    </div>
  </blockquote>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faQuoteLeft,
    faCircle
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'

  library.add(faQuoteLeft, faCircle)

  /**
   * This component styles a quote and its source.
   */
  export default {
    name: 'Blockquote',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored
    ],
    props: {
      /**
       * _the orientation of the blockquote_
       *
       * ∈ {`'horizontal'`, `'vertical'`}
       */
      orientation: {
        type: String,
        default: 'horizontal',
        validator: val => ['horizontal', 'vertical'].includes(val)
      }
    },
    computed: {
      /**
       * _the classes to apply on the blockquote_
       */
      blockquoteClasses: function () {
        return [
          ...this.coloredClasses,

          `${this.orientation}ly-oriented`
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Blockquote.styl">
</style>
