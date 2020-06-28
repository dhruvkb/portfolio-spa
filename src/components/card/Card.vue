<template>
  <div
    v-observe-visibility="observerOptions"
    class="card"
    :class="cardClasses">
    <div class="title" :class="`${color}-colored`">
      <!-- @slot Title goes here -->
      <slot name="title">
        <h6 class="top">{{ title }}</h6>
      </slot>
    </div>

    <div class="content">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import colored from '@/mixins/colored'
  import intersectable from '@/mixins/intersectable'

  /**
   * This component renders a minimalistic card.
   */
  export default {
    name: 'Card',
    mixins: [
      colored,
      intersectable
    ],
    props: {
      /**
       * _the title for the contents of the card_
       */
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      /**
       * Get the classes to use on the card.
       * @returns {Array} an array of all the classes to apply on the element
       */
      cardClasses () {
        return [
          {
            ...this.intersectableClasses
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Card.scss">
</style>
