<template>
  <blockquote
    class="blockquote"
    :class="blockquoteClasses">
    <div class="content">
      <div class="quotation">
        &ldquo;{{ quote.quotation }}&rdquo;
      </div>
      <cite class="citation">
        - {{ quote.citation }}
      </cite>
    </div>

    <div>
      <FontAwesomeIcon
        class="icon left"
        :icon="['fas', 'quote-left']"
        fixed-width/>
      <FontAwesomeIcon
        class="icon right"
        :icon="['fas', 'quote-right']"
        fixed-width/>
    </div>
  </blockquote>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faQuoteLeft,
    faQuoteRight
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'

  library.add(faQuoteLeft, faQuoteRight)

  /**
   * This component renders a quote and its source.
   */
  export default {
    name: 'Blockquote',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored
    ],
    data () {
      return {
        quotes: [
          {
            quotation: 'Don’t half-ass two things. Whole-ass one thing.',
            citation: 'Ron Swanson'
          },
          {
            quotation: 'Flux libraries are like glasses: you’ll know when you need them.',
            citation: 'Dan Abravov'
          },
          {
            quotation: 'Given enough time, hydrogen starts to wonder where it came from, and where its going.',
            citation: 'Edward R. Harrison'
          },
          {
            quotation: 'This quote is very memorable.',
            citation: 'https://xkcd.com/1942/'
          }
        ]
      }
    },
    computed: {
      /**
       * Get the classes to use on the blockquote.
       * @returns {Array} an array of all the classes to apply on the element
       */
      blockquoteClasses () {
        return [
          ...this.coloredClasses
        ]
      },
      /**
       * Get a randomly chosen quote.
       * @return {{citation: string, quotation: string}} an object with a randomly chosen quote and its author
       */
      quote () {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Blockquote.scss">
</style>
