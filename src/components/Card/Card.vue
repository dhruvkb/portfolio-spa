<template>
  <div
    v-observe-visibility="observerOptions"
    class="card"
    :class="cardClasses">
    <div class="title">
      <!-- @slot Title goes here -->
      <slot name="title"/>
    </div>
    <div class="content">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  /**
   * This component renders a minimalistic card.
   */
  export default {
    name: 'Card',
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
    computed: {
      cardClasses () {
        return [
          {
            'visible': this.isVisible
          }
        ]
      }
    },
    methods: {
      visibilityChanged (isVisible) {
        if (isVisible) {
          this.isVisible = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Card.styl">
</style>
