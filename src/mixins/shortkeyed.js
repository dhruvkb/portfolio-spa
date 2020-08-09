export default {
  props: {
    /**
     * _the key combination that activates the component_
     */
    keyCombination: {
      type: Array
    }
  },
  methods: {
    handleShortkey () {
      this.$emit('shortkey')
    }
  }
}
