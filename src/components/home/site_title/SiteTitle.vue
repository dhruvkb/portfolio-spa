<template>
  <svg
    class="site-title"
    :style="siteTitleStyles"
    viewBox="0 0 852 233"
    xmlns="http://www.w3.org/2000/svg"
    ref="siteTitle">
    <use href="@/assets/svgs/site_title.svg#site_title"/>
  </svg>
</template>

<script>
  import anime from 'animejs'

  import colors from '@/styles/tokens/colors.scss'

  export default {
    name: 'SiteTitle',
    data () {
      return {
        styles: {
          strokeDashoffset: 30, // em
          fill: this.hexToRgba(colors.colorAccentRed, 0),
          strokeWidth: 2 // px
        }
      }
    },
    computed: {
      /**
       *
       */
      siteTitleStyles () {
        return {
          '--fill': this.styles.fill,
          '--stroke-dashoffset': `${this.styles.strokeDashoffset}em`,
          '--stroke-width': `${this.styles.strokeWidth}px`
        }
      }
    },
    methods: {
      /**
       * Animate the site title into visibility.
       */
      animateSiteTitle () {
        anime
          .timeline({
            targets: this.styles,
            easing: 'linear'
          })
          .add({
            strokeDashoffset: 0,
            duration: 1000
          })
          .add({
            fill: colors.colorAccentRed,
            strokeWidth: 0,
            duration: 500
          })
      },

      /**
       * Convert a color string from a hex code to an RGBA value.
       *
       * @param {string} hex - the hex code representation of the color
       * @param {number} alpha - the value of the alpha channel to use
       * @return {string} the RGBA representation of the color
       */
      hexToRgba (hex, alpha = 1) {
        if (hex.length === 4) {
          hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
        }

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        const [r, g, b] = [...Array(3).keys()]
          .map(i => parseInt(result[i + 1], 16))
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      }
    },
    mounted () {
      this.animateSiteTitle()
    }
  }
</script>

<style scoped lang="scss" src="./SiteTitle.scss">
</style>
