export default {
  props: {
    /**
     * _the size of the memoji to show_
     *
     * ∈ {`'largest'`, `'larger'`, `'large'`, `'small'`, `'smaller'`,
     * `'smallest'`}
     */
    size: {
      type: String,
      validator: val => [
        'largest',
        'larger',
        'large',
        'small',
        'smaller',
        'smallest'
      ].includes(val)
    }
  },
  computed: {
    /**
     * _the classes describing the size of a component_
     */
    scaledClasses () {
      let classes = []
      if (this.size) {
        classes.push(`${this.size}-sized`)
      }
      return classes
    }
  }
}
