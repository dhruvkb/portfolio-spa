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

    Vue.prototype.$getSolarizedColor = function (index) {
      return this.$solarizedColors[index % this.$solarizedColors.length]
    }
  }
}
