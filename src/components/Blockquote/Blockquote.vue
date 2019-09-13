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

  export default {
    name: 'Blockquote',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored
    ],
    computed: {
      blockquoteClasses: function () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Blockquote.styl">
</style>
