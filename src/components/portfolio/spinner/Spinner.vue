<template>
  <span class="spinner">
    {{ spinnerStrings[index] }}
  </span>
</template>

<script>
  /**
   * This component prints a spinner that is composed of Unicode characters,
   * as would be seen in a terminal emulator.
   */
  export default {
    name: 'Spinner',
    data () {
      return {
        spinnerStrings: [
          '⡇⠀', '⠏⠀', '⠋⠁', '⠉⠉', '⠈⠙', '⠀⠹',
          '⠀⢸', '⠀⣰', '⢀⣠', '⣀⣀', '⣄⡀', '⣆⠀'
        ],
        index: 0,
        interval: 0.05,
        updateLooper: null
      }
    },
    methods: {
      /**
       * Start the loop that changes the spinner string periodically.
       */
      startLooping () {
        this.updateLooper = setInterval(() => {
          this.index = ++this.index % this.spinnerStrings.length
        }, this.interval * 1000)
      },
      /**
       * Stop the loop that changes the spinner string periodically.
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
