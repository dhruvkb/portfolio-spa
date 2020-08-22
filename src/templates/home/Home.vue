<template>
  <div class="home">
    <main>
      <transition
        name="fade"
        mode="out-in"
        appear
        @after-enter="handleAfterEnter">
        <section
          key="loaded"
          v-if="areImagesLoaded">
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
                    :color="solarizedColor(index)"
                    :is-focused="isPortfolioLinkFocused"/>
                </RouterLink>
              </div>
            </div>

            <div class="right">
              <div class="content">
                {{ $t('hello') }}! {{ $t('iam') }}
                <SiteTitle/>
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
                      :color="solarizedColor(index)"
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
            </div>

            <Scroll
              v-for="direction in ['previous', 'next']"
              :key="direction"
              class="scroll"
              :class="direction"
              :direction="direction"
              :color="solarizedColor(index)"
              @scroll="scrollTickers"/>
          </Grid>

          <footer>
            <Source color="cyan"/>
            <Kaomoji/>
            <Localizer/>
          </footer>
        </section>

        <section
          v-else
          key="loading">
          <Spinner color="red"/>
        </section>
      </transition>
    </main>
  </div>
</template>

<script>
  import Grid from '@/components/layout/grid/Grid'

  import Spinner from '@/components/common/spinner/Spinner'
  import Localizer from '@/components/common/localizer/Localizer'

  import Kaomoji from '@/components/home/kaomoji/Kaomoji'
  import Memoji from '@/components/home/memoji/Memoji'
  import Role from '@/components/home/role/Role'
  import Scroll from '@/components/home/scroll/Scroll'
  import SiteTitle from '@/components/home/site_title/SiteTitle'
  import Source from '@/components/home/source/Source'
  import Work from '@/components/home/work/Work'

  /**
   * This page is the landing page for the portfolio. All improvements start
   * here, and it is possible that they might not propagate to the other pages.
   */
  export default {
    name: 'Home',
    components: {
      Grid,

      Spinner,
      Localizer,

      Kaomoji,
      Memoji,
      Role,
      Scroll,
      SiteTitle,
      Source,
      Work
    },
    data () {
      return {
        index: 0,
        interval: 8, // seconds
        updateLooper: null,
        isPortfolioLinkFocused: false,

        totalImageCount: this.$roles.length,
        loadedImageCount: 0
      }
    },
    computed: {

      /**
       *
       */
      areImagesLoaded () {
        return this.loadedImageCount >= this.totalImageCount
      }
    },
    methods: {
      /**
       * Start the loop that changes memoji and role periodically.
       */
      startLooping () {
        this.stopLooping()
        this.updateLooper = setInterval(() => {
          this.index++
        }, this.interval * 1000)
      },
      /**
       * Stop the loop that changes memoji and role periodically.
       */
      stopLooping () {
        clearInterval(this.updateLooper)
      },
      /**
       * Change the index based on which scrolling button was clicked.
       * @param {number} delta - the value by which to change the tickers
       */
      scrollTickers (delta) {
        this.stopLooping()
        this.index += delta
        this.startLooping()
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
       * Load memoji for all roles by sourcing them into an invisible Image
       * element.
       */
      preloadImages () {
        this.$roles.forEach((role) => {
          const image = new Image()
          image.src = require(`@/assets/memoji/${role}.png`)

          image.onload = () => {
            this.loadedImageCount++
          }
        })
      },

      handleAfterEnter () {
        if (this.areImagesLoaded) {
          this.startLooping()
        }
      }
    },
    mounted () {
      this.preloadImages()
    },
    beforeDestroy () {
      this.stopLooping()
    }
  }
</script>

<style scoped lang="scss" src="./Home.scss"/>

<i18n src="./lang.json"/>
