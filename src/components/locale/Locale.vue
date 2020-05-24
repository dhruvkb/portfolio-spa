<template>
  <div class="locale">
    <div class="languages">
      <button
        v-for="(language, code) in languages"
        :key="code"
        :title="language.titleText"
        @click="setLanguage(code)">
        {{ language.name }}
      </button>
    </div>

    <FontAwesomeIcon
      @click="globeClicked"
      :icon="['fas', 'globe']"
      fixed-width/>

    <button
      v-shortkey="['l']"
      class="translator"
      @click="cycleLanguage"
      @shortkey="cycleLanguage">
      Next language
    </button>
  </div>
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
        visibleLanguages: {
          en: {
            name: 'English',
            titleText: 'Cheerio!'
          }
        },
        hiddenLanguages: {
          pr: {
            name: 'Pirate-speak',
            titleText: 'Arrr!'
          }
        },
        language: null,
        clickCount: 0
      }
    },
    computed: {
      showHiddenLanguages () {
        return localStorage.getItem('hiddenLanguages') === 'visible'
      },
      languages () {
        return {
          ...this.visibleLanguages,
          ...(this.showHiddenLanguages ? this.hiddenLanguages : {})
        }
      }
    },
    watch: {
      // Set up a two-way sync between language and $i18n.locale
      language (to, from) {
        if (to !== from) { // Breaks recursion
          this.$i18n.locale = to

          // Persist locale to local storage
          localStorage.locale = to

          // Set document root language
          document.documentElement.setAttribute('lang', this.language)
        }
      },
      '$i18n.locale': function (to, from) {
        if (to !== from) { // Breaks recursion
          this.language = to
        }
      }
    },
    methods: {
      /**
       * Go one step closer to revealing the secret languages
       */
      globeClicked () {
        this.clickCount++
        if (this.clickCount >= 5) {
          localStorage.hiddenLanguages = 'visible'
        }
      },
      /**
       * Change the language of the app to the given one.
       */
      setLanguage (language) {
        this.language = language
      },
      /**
       * Change the language of the app to the successor of the current one.
       */
      cycleLanguage () {
        let languageCodes = Object.keys(this.languages)
        let currentIndex = languageCodes.indexOf(this.language)
        let nextIndex = (currentIndex + 1) % languageCodes.length
        this.language = languageCodes[nextIndex]
      }
    },
    created () {
      if (localStorage.locale) {
        // Switch to the last used locale
        this.language = localStorage.locale
      } else {
        this.language = 'en'
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Locale.styl">
</style>
