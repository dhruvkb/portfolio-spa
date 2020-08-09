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
        icon="quote-left"/>
      <Icon
        class="right"
        icon="quote-right"/>
    </div>
  </blockquote>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  import quotes from '@/data/quotes.json'

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
        quotes
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
        const set = quotes[this.$i18n.locale]
        return set[Math.floor(Math.random() * set.length)]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Blockquote.scss"/>
