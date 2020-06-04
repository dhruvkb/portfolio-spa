<template>
  <div
    v-observe-visibility="observerOptions"
    class="card"
    :class="cardClasses">
    <div class="title">
      <!-- @slot Title goes here -->
      <slot name="title">
        <h6 :class="['top', `${color}-colored`]">
          {{ title }}
        </h6>
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

  /**
   * This component renders a minimalistic card.
   */
  export default {
    name: 'Card',
    mixins: [
      colored
    ],
    data () {
      return {
        observerOptions: {
          callback: this.visibilityChanged,
          once: true,
          intersection: {
            threshold: 0.6 // Only when more than half space is visible
          }
        },
        isVisible: false
      }
    },
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
            visible: this.isVisible
          }
        ]
      }
    },
    methods: {
      /**
       * Set the card's visibility status as sent by the observer.
       * @param {boolean} isVisible - the updated visibility status of the card
       */
      visibilityChanged (isVisible) {
        if (isVisible) {
          this.isVisible = true
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Card.scss">
</style>
