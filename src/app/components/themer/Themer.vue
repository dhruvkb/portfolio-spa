<template>
  <button
    v-shortkey="['t']"
    class="themer"
    :title="helpText"
    @click="switchTheme"
    @shortkey="switchTheme">
    <FontAwesomeLayers class="iconography">
      <FontAwesomeIcon
        class="icon"
        :class="themerIconClasses('dark')"
        :icon="['fas', 'moon']"
        fixed-width/>
      <FontAwesomeIcon
        class="icon"
        :class="themerIconClasses('light')"
        :icon="['fas', 'sun']"
        fixed-width/>

      <!-- Adjust with solid background and stroke -->
      <FontAwesomeIcon
        class="icon backdrop"
        :icon="['fas', 'circle']"
        transform="shrink-2 down-8 right-8"
        fixed-width/>
      <FontAwesomeIcon
        class="icon adjust"
        :icon="['fas', 'adjust']"
        transform="shrink-4 down-8 right-8"
        fixed-width/>
    </FontAwesomeLayers>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faSun,
    faMoon,
    faCircle,
    faAdjust
  } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeLayers,
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'

  library.add(faSun, faMoon, faCircle, faAdjust)

  /**
   * This component enables switching between the light and dark variants
   * of [Solarized by Ethan Schoonover](https://ethanschoonover.com/solarized/).
   */
  export default {
    name: 'Themer',
    components: {
      FontAwesomeLayers,
      FontAwesomeIcon
    },
    data () {
      return {
        themes: [
          'light',
          'dark'
        ],
        theme: null
      }
    },
    watch: {
      /**
       * Sync changes from the theme data variable to the root class and
       * also updates local storage for persistence.
       */
      theme (to, from) {
        if (to !== from) { // Breaks recursion
          document.documentElement.classList.remove(`${from}-themed`)
          document.documentElement.classList.add(`${to}-themed`)

          // Persist theme to local storage
          localStorage.theme = to
        }
      }
    },
    computed: {
      /**
       * Get the theme variant opposite to the current one.
       * @returns {string} the name of the opposite theme
       */
      otherTheme () {
        let index = this.themes.indexOf(this.theme)
        return this.themes[++index % this.themes.length]
      },
      /**
       * Get the title text that describes the action this button will perform.
       */
      helpText () {
        return `[T] Switch to the ${this.otherTheme} theme.`
      }
    },
    methods: {
      /**
       * Get the classes to apply on the theme representation icon.
       * @param {string} theme - the theme represented by the icon
       * @returns {Array} an array of all the classes to apply on the element
       */
      themerIconClasses (theme) {
        return [
          theme,
          this.theme === theme ? 'current' : 'other'
        ]
      },

      /**
       * Change the theme of the app to the other one.
       */
      switchTheme () {
        this.theme = this.otherTheme
      }
    },
    created () {
      if (localStorage.theme) {
        // Switch to last used theme
        this.theme = localStorage.theme
      } else {
        this.theme = 'dark'
      }
    }
  }
</script>

<style scoped lang="scss" src="./Themer.scss">
</style>
