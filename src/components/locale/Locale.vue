<template>
  <button
    v-shortkey="['l']"
    class="locale"
    :title="helpText"
    @click="cycleLanguage"
    @shortkey="cycleLanguage">
    <FontAwesomeIcon
      :icon="['fas', 'globe']"
      fixed-width/>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGlobe } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faGlobe)

  /**
   *
   */
  export default {
    name: 'Locale',
    components: {
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
       */
      nextLanguage () {
        let languageCodes = Object.keys(this.languages)
        let index = languageCodes.indexOf(this.language)
        return languageCodes[++index % languageCodes.length]
      },
      helpText () {
        let readableName = this.languages[this.nextLanguage].name
        return `[L] Change language to ${readableName}.`
      }
    },
    methods: {
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
