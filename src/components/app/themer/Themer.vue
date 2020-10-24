<template>
  <div
    class="themer">
    <Trip
      color="green"
      :shortkey="['t']"
      :options="options"
      v-model="theme">
      <template #system>
        <Icon
          icon="computer"
          :path="icons.computer"/>
      </template>
      <template #light>
        <Icon
          icon="sun"
          :path="icons.sun"/>
      </template>
      <template #dark>
        <Icon
          icon="moon"
          :path="icons.moon"/>
      </template>
    </Trip>
  </div>
</template>

<script>
  import Trip from '@/components/common/trip/Trip'
  import Icon from '@/components/common/icon/Icon'

  import colors from '@/styles/exports/colors.scss'

  import computer from '@/assets/icons/computer.svg'
  import sun from '@/assets/icons/sun.svg'
  import moon from '@/assets/icons/moon.svg'

  /**
   * This component enables switching between the light and dark variants
   * of [Solarized by Ethan Schoonover](https://ethanschoonover.com/solarized/).
   */
  export default {
    name: 'Themer',
    components: {
      Icon,
      Trip
    },
    data () {
      return {
        themes: {
          system: {
            themeColor: null // automatically maps to light or dark
          },
          light: {
            themeColor: colors.colorBase2
          },
          dark: {
            themeColor: colors.colorBase02
          }
        },
        theme: null,
        default: 'system',
        icons: {
          computer,
          sun,
          moon
        }
      }
    },
    computed: {
      /**
       * Get the array of options to pass to the Trip component.
       * @returns {Array} the list of options consisting of a name and a title
       */
      options () {
        const themes = Object.keys(this.themes)
        return themes.map(theme => {
          let title
          if (theme === this.theme) {
            title = `Stay on the ${theme} theme.`
          } else {
            title = `Switch to the ${theme} theme.`
          }
          return {
            name: theme,
            title
          }
        })
      },

      /**
       * Get whether the user prefers the dark theme.
       * @returns {boolean} whether the user prefers a dark theme
       */
      preferDark () {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      },

      /**
       * Find the DOM element corresponding to the 'theme-color' meta tag.
       * @returns {HTMLMetaElement} the 'theme-color' meta tag
       */
      themeColorElement () {
        return Array.from(
          document.getElementsByTagName('meta')
        ).find(elem => elem.name === 'theme-color')
      },
      /**
       * Get the color that should be set as the value of the 'theme-color' meta
       * tag. For the system theme, it maps to the dark or light value as set
       * by the operating-system.
       * @returns {string} the code for the color for the 'theme-color' meta tag
       */
      themeColor () {
        if (this.theme === 'system') {
          return this.preferDark
            ? this.themes.dark.themeColor
            : this.themes.light.themeColor
        } else {
          return this.themes[this.theme].themeColor
        }
      }
    },
    watch: {
      /**
       * Sync changes from the theme data variable to the root class and
       * also updates local storage for persistence.
       * @param {string} to - the new value of the theme
       * @param {string} from - the old value of the theme
       */
      theme (to, from) {
        if (to !== from) { // Breaks recursion
          document.documentElement.setAttribute('theme', this.theme)

          // Set the new theme color
          this.themeColorElement.content = this.themeColor

          // Persist theme to local storage
          localStorage.theme = to
        }
      }
    },
    created () {
      if (localStorage.theme) {
        // Switch to last used theme
        this.theme = localStorage.theme
      } else {
        // Set theme to the default value
        this.theme = this.default
      }
    }
  }
</script>

<style scoped lang="scss" src="./Themer.scss"/>
