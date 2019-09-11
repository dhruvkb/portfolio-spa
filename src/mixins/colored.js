export default {
  props: {
    /**
     * _the primary color for the component_
     *
     * ∈ {`'yellow'`, `'orange'`, `'red'`, `'magenta'`, `'violet'`, `'blue'`,
     * `'cyan'`, `'green'`}
     *
     * If the color is not specified, a default one is chosen as described.
     */
    color: {
      type: String,
      validator: val => [
        'yellow',
        'orange',
        'red',
        'magenta',
        'violet',
        'blue',
        'cyan',
        'green'
      ].includes(val)
    }
  },
  computed: {
    coloredClasses: function () {
      let classes = []
      if (this.color) {
        classes.push(`${this.color}-colored`)
      }
      return classes
    }
  }
}
