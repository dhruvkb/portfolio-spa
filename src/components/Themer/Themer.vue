<template>
  <button
    class="themer"
    :title="helpText"
    @click="toggleTheme">
    <span class="content">
      <FontAwesomeIcon
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
    props: {
      /**
       * _the current theme of the app_
       */
      theme: {
        type: String,
        validator: val => ['light', 'dark'].includes(val)
      }
    },
    computed: {
      /**
       * _the theme variant opposite to the current one_
       */
      otherTheme: function () {
        if (this.theme === 'light') {
          return 'dark'
        } else {
          return 'light'
        }
      },
      /**
       * _the message indicating the action the component will perform_
       */
      helpText: function () {
        return `Switch to the ${this.otherTheme} theme.`
      }
    },
    methods: {
      /**
       * Save and emit the other theme value.
       *
       * This changes the theme of the app to the opposite of the current one.
       */
      toggleTheme: function () {
        // Persist theme for future visits
        localStorage.theme = this.otherTheme

        // Emit change to parent
        this.$emit('update:theme', this.otherTheme)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Themer.styl">
</style>
