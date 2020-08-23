<template>
  <div
    class="localizer"
    :title="helpText">
    <Flip
      color="cyan"
      :shortkey="['l']"
      v-model="isFlipped">
      <template #left>
        <Icon
          icon="skull"
          :path="icons.skull"/>
      </template>
      <template #right>
        <Icon
          icon="text"
          :path="icons.text"/>
      </template>
    </Flip>
  </div>
</template>

<script>
  import Flip from '@/components/common/flip/Flip'
  import Icon from '@/components/common/icon/Icon'

  import skull from '@/assets/icons/skull.svg'
  import text from '@/assets/icons/text.svg'

  /**
   * This component enables changing languages between English and Pirate-speak
   * using [Vue i18n by かずぽん](https://kazupon.github.io/vue-i18n/).
   */
  export default {
    name: 'Localizer',
    components: {
      Icon,
      Flip
    },
    data () {
      return {
        locales: {
          en: {
            readableName: 'English',
            exclamation: 'Cheerio!'
          },
          pr: {
            readableName: 'Pirate-speak',
            exclamation: 'Arrr!'
          }
        },
        locale: null,
        default: 'en',
        icons: {
          skull,
          text
        }
      }
    },
    computed: {
      /**
       * Create a model to use with the flip switch component.
       */
      isFlipped: {
        /**
         * Get the current state of the flip. The switch is considered to be
         * flipped when the component is not in the default state.
         * @returns {boolean} the status of the flip
         */
        get () {
          return this.locale !== this.default
        },
        /**
         * Set the new value for the locale based on the new flip status.
         * @param {boolean} val - the new status of the flip
         */
        set (val) {
          if (this.isFlipped !== val) {
            this.switchLocale()
          }
        }
      },

      /**
       * Get the locale other than the current one.
       * @returns {string} the code of the other locale
       */
      otherLocale () {
        const localeCodes = Object.keys(this.locales)
        let index = localeCodes.indexOf(this.locale)
        return localeCodes[++index % localeCodes.length]
      },
      /**
       * Get the title text that describes the action this button will perform.
       */
      helpText () {
        const { readableName, exclamation } = this.locales[this.otherLocale]
        return `[L] Change language to ${readableName}. ${exclamation}`
      }
    },
    watch: {
      /**
       * Sync changes from the locale data variable to root lang, Vue i18n and
       * also updates local storage for persistence.
       * @param {string} to - the new value of the locale
       * @param {string} from - the old value of the locale
       */
      locale (to, from) {
        if (to !== from) { // Breaks recursion
          document.documentElement.setAttribute('lang', this.locale)

          // Set document root locale
          this.$root.$i18n.locale = to

          // Persist locale to local storage
          localStorage.locale = to
        }
      }
    },
    methods: {
      /**
       * Change the locale of the app to the other one.
       */
      switchLocale () {
        this.locale = this.otherLocale
      }
    },
    created () {
      if (localStorage.locale) {
        // Switch to the last used locale
        this.locale = localStorage.locale
      } else {
        // Set locale to the default value
        this.locale = this.default
      }
    }
  }
</script>

<style scoped lang="scss" src="./Localizer.scss"/>
