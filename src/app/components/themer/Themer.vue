<template>
  <button
    v-shortkey="['t']"
    class="themer"
    :title="helpText"
    @click="toggleTheme"
    @shortkey="toggleTheme">
    <span class="content">
      <FontAwesomeIcon
        class="icon"
        :icon="['fas', 'adjust']"
        fixed-width/>
    </span>
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAdjust } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faAdjust)

  /**
   * This component enables the app to switch between the light and dark
   * variants of the [Solarized theme by Ethan
   * Schoonover](https://ethanschoonover.com/solarized/).
   */
  export default {
    name: 'Themer',
    components: {
      FontAwesomeIcon
    },
    data () {
      return {
        theme: null
      }
    },
    computed: {
      /**
       * _the theme variant opposite to the current one_
       */
      otherTheme () {
        if (this.theme === 'light') {
          return 'dark'
        } else {
          return 'light'
        }
      },
      /**
       * _the message indicating the action the component will perform_
       */
      helpText () {
        return `[T] Switch to the ${this.otherTheme} theme.`
      }
    },
    watch: {
      theme (to, from) {
        if (to !== from) { // Breaks recursion
          document.documentElement.classList.remove(`${from}-themed`)
          document.documentElement.classList.add(`${to}-themed`)

          // Persist theme to local storage
          localStorage.theme = to
        }
      }
    },
    methods: {
      /**
       * Change the theme of the app to the opposite of the current one.
       */
      toggleTheme () {
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

<style scoped lang="stylus" src="./Themer.styl">
</style>
