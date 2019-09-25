<template>
  <span class="spinner green-colored">{{ spinnerStrings[index] }}</span>
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
      startLooping () {
        this.updateLooper = setInterval(() => {
          this.index = ++this.index % this.spinnerStrings.length
        }, this.interval * 1000)
      }
    },
    created () {
      this.startLooping()
    },
    beforeDestroy () {
      clearInterval(this.updateLooper)
    }
  }
</script>
