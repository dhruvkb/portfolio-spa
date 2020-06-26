<template>
  <div class="exit">
    Exiting in {{ time }} seconds.
  </div>
</template>

<script>
  /**
   * This command closes the terminal and redirects to the home screen.
   */
  export default {
    name: 'Exit',
    data () {
      return {
        time: 5, // seconds
        updateLooper: null
      }
    },
    methods: {
      /**
       * Start the timer that counts down to zero.
       */
      startLooping () {
        this.stopLooping()
        this.updateLooper = setInterval(() => {
          if (this.time > 0) {
            this.time--
          } else {
            this.$navigateTo({ name: 'home' })
          }
        }, 1000)
      },
      /**
       * Stop the timer that counts down to zero.
       */
      stopLooping () {
        clearInterval(this.updateLooper)
      }
    },
    created () {
      this.startLooping()
    },
    beforeDestroy () {
      this.stopLooping()
    }
  }
</script>
