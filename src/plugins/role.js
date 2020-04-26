/**
 * Ensures that the array of roles is accessible in every component.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$roles = [
      'software_developer',
      'infrastructure_architect',
      'technical_writer',
      'design_dabbler',
      'open_sourcerer',
      'easter_eggsmith'
    ]

    Vue.prototype.$getRole = function (index) {
      return this.$roles[index % this.$roles.length]
    }

    Vue.prototype.$getSanitizedRole = function (index) {
      return this.$getRole(index).replace(/_/g, ' ')
    }
  }
}
