export default {
  props: {
    /**
     * _the primary color for the component_
     *
     * ∈ {`'yellow'`, `'orange'`, `'red'`, `'magenta'`, `'violet'`, `'blue'`,
     * `'cyan'`, `'green'`, `'secondary'`}
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
        'green',
        'secondary'
      ].includes(val)
    }
  },
  computed: {
    /**
     * _the classes describing the accent color on a component_
     */
    coloredClasses () {
      const classes = []
      if (this.color) {
        classes.push(`${this.color}-colored`)
      }
      return classes
    }
  }
}
