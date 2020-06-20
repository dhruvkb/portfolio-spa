<template>
  <button
    v-shortkey="['l']"
    class="locale"
    :title="helpText"
    @click="switchLanguage"
    @shortkey="switchLanguage">
    <FontAwesomeLayers class="iconography">
      <FontAwesomeIcon
        class="icon"
        :class="localeIconClasses('en')"
        :icon="['fas', 'font']"
        fixed-width/>
      <FontAwesomeIcon
        class="icon"
        :class="localeIconClasses('pr')"
        :icon="['fas', 'skull']"
        fixed-width/>

      <!-- Globe with solid background and stroke -->
      <FontAwesomeIcon
        class="icon backdrop"
        :icon="['fas', 'circle']"
        transform="shrink-2 down-8 right-8"
        fixed-width/>
      <FontAwesomeIcon
        class="icon globe"
        :icon="['fas', 'globe']"
        transform="shrink-4 down-8 right-8"
        fixed-width/>
    </FontAwesomeLayers>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faFont,
    faSkull,
    faCircle,
    faGlobe
  } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeLayers,
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'

  library.add(faFont, faSkull, faCircle, faGlobe)

  /**
   * This component enables changing languages between English and Pirate-speak
   * using [Vue i18n by かずぽん](https://kazupon.github.io/vue-i18n/).
   */
  export default {
    name: 'Locale',
    components: {
      FontAwesomeLayers,
      FontAwesomeIcon
    },
    data () {
      return {
        languages: {
          en: {
            name: 'English',
            titleText: 'Cheerio!'
          },
          pr: {
            name: 'Pirate-speak',
            titleText: 'Arrr!'
          }
        },
        language: null
      }
    },
    watch: {
      /**
       * Sync changes from the language data variable to root lang, Vue i18n and
       * also updates local storage for persistence.
       * @param {string} to - the new value of the language
       * @param {string} from - the old value of the language
       */
      language (to, from) {
        if (to !== from) { // Breaks recursion
          document.documentElement.setAttribute('lang', this.language)

          // Set document root language
          this.$root.$i18n.locale = to

          // Persist locale to local storage
          localStorage.locale = to
        }
      }
    },
    computed: {
      /**
       * Get the language other than the current one.
       * @returns {string} the code of the other language
       */
      otherLanguage () {
        const languageCodes = Object.keys(this.languages)
        let index = languageCodes.indexOf(this.language)
        return languageCodes[++index % languageCodes.length]
      },
      /**
       * Get the title text that describes the action this button will perform.
       */
      helpText () {
        const readableName = this.languages[this.otherLanguage].name
        const exclamation = this.languages[this.otherLanguage].titleText
        return `[L] Change language to ${readableName}. ${exclamation}`
      }
    },
    methods: {
      /**
       * Get the classes to apply on the locale representation icon.
       * @param {string} language - the language represented by the icon
       * @returns {Array} an array of all the classes to apply on the element
       */
      localeIconClasses (language) {
        return [
          language,
          this.language === language ? 'current' : 'other'
        ]
      },

      /**
       * Change the language of the app to the other one.
       */
      switchLanguage () {
        this.language = this.otherLanguage
      }
    },
    created () {
      if (localStorage.locale) {
        // Switch to the last used locale
        this.language = localStorage.locale
      } else {
        // Set language to English by default
        this.language = 'en'
      }
    }
  }
</script>

<style scoped lang="scss" src="./Locale.scss">
</style>
