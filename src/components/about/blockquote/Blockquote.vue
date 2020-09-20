<template>
  <blockquote
    class="blockquote"
    :class="blockquoteClasses">
    <div class="content">
      <div class="quotation">
        &ldquo;{{ quote.quotation }}&rdquo;
      </div>
      <cite class="citation secondary-colored">
        - {{ quote.citation }}
      </cite>
    </div>

    <div>
      <Icon
        class="left"
        icon="quotes"
        :path="icons.quotes"/>
      <Icon
        class="right"
        icon="quotes"
        :path="icons.quotes"/>
    </div>
  </blockquote>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  import quotes from '@/data/quotes.json'

  import quotesIcon from '@/assets/icons/quotes.svg'

  /**
   * This component renders a quote and its source.
   */
  export default {
    name: 'Blockquote',
    components: {
      Icon
    },
    mixins: [
      colored
    ],
    data () {
      return {
        quotes,
        icons: {
          quotes: quotesIcon
        }
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
       * @returns {Object} a randomly chosen quote and its author
       */
      quote () {
        return quotes[Math.floor(Math.random() * quotes.length)]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Blockquote.scss"/>
