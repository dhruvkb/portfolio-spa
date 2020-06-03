<template>
  <button
    v-shortkey="['l']"
    class="locale"
    :title="helpText"
    @click="cycleLanguage"
    @shortkey="cycleLanguage">
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
   * This component enables changing languages using Vue i18n.
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
       * Sync changes from the language data variable to i18n.locale and local storage.
       */
      language (to, from) {
        if (to !== from) { // Breaks recursion
          // Persist locale to local storage
          localStorage.locale = to
          // Set document root language
          this.$root.$i18n.locale = to
          document.documentElement.setAttribute('lang', this.language)
        }
      }
    },
    computed: {
      /**
       * Get the language of the next language in cyclical order.
       */
      nextLanguage () {
        const languageCodes = Object.keys(this.languages)
        let index = languageCodes.indexOf(this.language)
        return languageCodes[++index % languageCodes.length]
      },
      /**
       * Get the title text that describes the effect of this button.
       */
      helpText () {
        const readableName = this.languages[this.nextLanguage].name
        const exclamation = this.languages[this.nextLanguage].titleText
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
          this.language,
          this.language === language ? 'current' : 'other'
        ]
      },
      /**
       * Change the language of the app to the successor of the current one.
       */
      cycleLanguage () {
        this.language = this.nextLanguage
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
