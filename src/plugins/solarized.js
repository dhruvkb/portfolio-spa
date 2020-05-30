/**
 * Ensures that the array of Solarized accent colors is accessible in every
 * component.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$solarizedColors = [
      'violet',
      'blue',
      'cyan',
      'green',
      'yellow',
      'orange',
      'red',
      'magenta'
    ]

    Vue.prototype.$safeSolarizedColors = [
      'violet',
      'blue',
      'cyan',
      'yellow',
      'orange',
      'magenta'
    ]

    Vue.prototype.$getSolarizedColor = function (index) {
      return this.$safeSolarizedColors[index % this.$safeSolarizedColors.length]
    }

    Vue.prototype.$getShuffledSolarizedColors = function () {
      const colors = [...this.$safeSolarizedColors]
      let remaining = colors.length
      while (remaining) {
        const index = Math.floor(Math.random() * remaining)
        remaining -= 1

        const temp = colors[index]
        colors[index] = colors[remaining]
        colors[remaining] = temp
      }

      return colors
    }
  }
}
