/**
 * Ensures that the error-handled function for programmatic routing is
 * accessible in every component.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$navigateTo = function (to) {
      this.$router
        .push(to)
        .catch(err => {
          if (err.name === 'NavigationDuplicated') {
            // Do nothing
          } else {
            console.log(err)
          }
        })
    }
  }
}
