export default {
  data () {
    return {
      isCtaFocused: false
    }
  },
  methods: {
    setFocus (to) {
      this.isCtaFocused = to
    },

    handleCtaFocus () {
      this.setFocus(true)
    },
    handleCtaBlur () {
      this.setFocus(false)
    }
  }
}
