<template>
  <div class="home">
    <main>
      <section>
        <Grid class="home-grid">
          <div class="left">
            <div class="content">
              <RouterLink
                class="memoji-link"
                tabindex="-1"
                :to="{name: 'portfolio'}"
                @mouseenter.native="focusPortfolioLink"
                @mouseleave.native="blurPortfolioLink">
                <Memoji
                  :index="index"
                  :color="$getSolarizedColor(index)"
                  :is-focused="isPortfolioLinkFocused"/>
              </RouterLink>
            </div>
          </div>

          <div class="right">
            {{ $t('hello') }}! {{ $t('iam') }}
            <svg
              class="red-colored site-title"
              viewBox="0 0 852 233"
              xmlns="http://www.w3.org/2000/svg"
              ref="siteTitle">
              <g id="dhruv">
                <path :d="svg.paths.dhruv"/>
                <path :d="svg.paths.bhanushali"/>
              </g>
            </svg>
            {{ $t('hats') }}

            <p class="roles">
              {{ $t('iam') }}
              <RouterLink
                class="role-link"
                tabindex="0"
                :to="{name: 'portfolio'}"
                title="See my portfolio."
                @mouseenter.native="focusPortfolioLink"
                @mouseleave.native="blurPortfolioLink"
                @focus.native="focusPortfolioLink"
                @blur.native="blurPortfolioLink">
                <Role
                  :index="index"
                  :color="$getSolarizedColor(index)"
                  :is-focused="isPortfolioLinkFocused"/>
              </RouterLink>
            </p>

            <p>
              {{ $t('with') }}
              <br/>
              {{ $t('i') }}
              <Work
                :index="index"
                :is-focused="isPortfolioLinkFocused"/>
              <br/>
              <span
                class="secondary-colored"
                :title="$t('3m')">
                {{ $t('other') }}
              </span>
            </p>
          </div>

          <Scroll
            v-for="direction in ['previous', 'next']"
            :key="direction"
            class="scroll"
            :class="direction"
            :direction="direction"
            :color="$getSolarizedColor(index)"
            @scroll="scrollTickers"/>
        </Grid>

        <footer>
          <Source/>
          <Kaomoji/>
          <Locale/>
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
  import anime from 'animejs'

  import Grid from '@/components/grid/Grid'
  import Locale from '@/components/locale/Locale'

  import Kaomoji from './components/kaomoji/Kaomoji'
  import Memoji from './components/memoji/Memoji'
  import Role from './components/role/Role'
  import Work from './components/work/Work'
  import Source from './components/source/Source'
  import Scroll from './components/scroll/Scroll'

  import svg from './data/svg.json'

  /**
   * This page is the landing page for the portfolio. All improvements start
   * here, and it is possible that they might not propagate to the other pages.
   */
  export default {
    name: 'Home',
    components: {
      Grid,
      Locale,

      Kaomoji,
      Memoji,
      Role,
      Work,
      Source,
      Scroll
    },
    data () {
      return {
        svg,

        index: 0,
        interval: 8,
        updateLooper: null,
        isPortfolioLinkFocused: false
      }
    },
    methods: {
      /**
       * Start the loop that changes memoji and role periodically.
       */
      startLooping () {
        this.updateLooper = setInterval(() => {
          this.index = ++this.index
        }, this.interval * 1000)
      },
      /**
       * Stop the loop that changes memoji and role periodically.
       */
      stopLooping () {
        clearInterval(this.updateLooper)
      },
      /**
       * Set the memoji, role and work tickers to their focused states and stop
       * the ticking animation.
       */
      focusPortfolioLink () {
        this.stopLooping()
        this.isPortfolioLinkFocused = true
      },
      /**
       * Set the memoji, role and work tickers to their blurred states and start
       * the ticking animation.
       */
      blurPortfolioLink () {
        this.isPortfolioLinkFocused = false
        this.startLooping()
      },
      /**
       * Change the index based on which scrolling button was clicked.
       * @param {number} delta - the value by which to change the tickers
       */
      scrollTickers (delta) {
        this.stopLooping()
        this.index += delta
        this.startLooping()
      }
    },
    created () {
      this.startLooping()
    },
    mounted () {
      const siteTitle = this.$refs.siteTitle
      anime
        .timeline({
          targets: siteTitle.querySelectorAll('path'),
          easing: 'linear',
          duration: 1000
        })
        .add({
          strokeDashoffset: 0
        })
        .add({
          fill: '#dc322f',
          strokeWidth: 0
        })
    },
    beforeDestroy () {
      this.stopLooping()
    }
  }
</script>

<style scoped lang="scss" src="./Home.scss">
</style>

<i18n src="./lang.json">
</i18n>
