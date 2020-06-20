/**
 * Ensures that the array of roles is accessible in every component.
 */
export default {
  install (Vue, options) {
    Vue.prototype.$roles = [
      'software_developer',
      'technical_writer',
      'infrastructure_architect',
      'design_dabbler',
      'open_sourcerer',
      'easter_eggsmith'
    ]

    Vue.prototype.$works = [
      'compose_code',
      'author_docs',
      'ship_containers',
      'craft_experiences',
      'build_communities',
      'evoke_emotions'
    ]

    Vue.prototype.$getRole = function (index) {
      return this.$roles[this.$modulo(index, this.$roles.length)]
    }

    Vue.prototype.$getWork = function (index) {
      return this.$works[this.$modulo(index, this.$works.length)]
    }
  }
}
