export default {
  props: {
    /**
     * _whether the component should be rendered in a focused state_
     */
    isFocused: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * _the classes describing the accent color on a component_
     */
    focusableClasses () {
      return {
        focused: this.isFocused
      }
    }
  }
}
