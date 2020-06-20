/**
 * Add a patched modulo operator to the disgrace of a language that is JavaScript.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$modulo = function (dividend, divisor) {
      return (dividend % divisor + divisor) % divisor
    }
  }
}
