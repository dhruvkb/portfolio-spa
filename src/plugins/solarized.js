/**
 * Ensures that the array of Solarized accent colors is accessible in every
 * component.
 */
export default {
  install (Vue, options) {
    const colors = [
      'violet',
      'blue',
      'cyan',
      'green',
      'yellow',
      'orange',
      'red',
      'magenta'
    ]
    const reserved = [
      'green', // reserved for navigation
      'red' // reserved for site title
    ]
    const safe = colors.filter(color => !reserved.includes(color))

    Vue.mixin({
      computed: {
        shuffledSolarizedColors () {
          const colors = [...safe]
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
      },
      methods: {
        solarizedColor (index) {
          index = this.$modulo(index, safe.length)
          return safe[index]
        }
      }
    })
  }
}
