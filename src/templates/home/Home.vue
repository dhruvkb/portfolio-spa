<template>
  <main id="home">
    <transition
      name="fade"
      mode="out-in"
      appear
      @after-enter="handleAfterEnter">
      <section
        v-if="areImagesLoaded"
        key="loaded">
        <Grid class="home-grid">
          <div class="left">
            <div class="content">
              <RouterLink
                class="memoji-link"
                tabindex="-1"
                :to="{name: 'portfolio'}"
                @mouseenter.native="focusPortfolioLink"
                @mouseleave.native="blurPortfolioLink">
                <transition
                  :name="horizontalTransitionName"
                  mode="out-in"
                  appear>
                  <Memoji
                    :key="index"
                    :index="index"
                    :color="solarizedColor(index)"
                    :is-focused="isPortfolioLinkFocused"/>
                </transition>
              </RouterLink>
            </div>
          </div>

          <div class="right">
            <div class="content">
              Hello there! I am
              <SiteTitle/>
              and so nice to meet u.

              <p class="roles">
                I am
                <RouterLink
                  class="role-link"
                  tabindex="0"
                  :to="{name: 'portfolio'}"
                  title="See my portfolio."
                  @mouseenter.native="focusPortfolioLink"
                  @mouseleave.native="blurPortfolioLink"
                  @focus.native="focusPortfolioLink"
                  @blur.native="blurPortfolioLink">
                  <transition
                    :name="verticalTransitionName"
                    mode="out-in"
                    appear>
                    <Role
                      :key="index"
                      :index="index"
                      :color="solarizedColor(index)"
                      :is-focused="isPortfolioLinkFocused"/>
                  </transition>
                </RouterLink>
              </p>

              <p>
                With utmost meticulousness and love for the craft,
                <br/>
                I
                <transition
                  :name="verticalTransitionName"
                  mode="out-in"
                  appear>
                  <Work
                    :key="index"
                    :index="index"
                    :is-focused="isPortfolioLinkFocused"/>
                </transition>
                <br/>
                <span
                  class="secondary-colored"
                  title="Such as movies, music and memes!">
                  and also enjoy other things.
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
      </section>

      <section
        v-else
        key="loading"
        class="centered">
        <Spinner color="red"/>
      </section>
    </transition>

    <footer v-show="areImagesLoaded">
      <Source color="cyan"/>
      <Kaomoji/>
    </footer>
  </main>
</template>

<script>
  import Grid from '@/components/layout/grid/Grid'

  import Spinner from '@/components/common/spinner/Spinner'

  import Kaomoji from '@/components/home/kaomoji/Kaomoji'
  import Memoji from '@/components/home/memoji/Memoji'
  import Role from '@/components/home/role/Role'
  import Scroll from '@/components/home/scroll/Scroll'
  import SiteTitle from '@/components/home/site_title/SiteTitle'
  import Source from '@/components/home/source/Source'
  import Work from '@/components/home/work/Work'
  import descriptions from '@/data/descriptions.json'

  /**
   * This page is the landing page for the portfolio. All improvements start
   * here, and it is possible that they might not propagate to the other pages.
   */
  export default {
    name: 'Home',
    components: {
      Grid,

      Spinner,

      Kaomoji,
      Memoji,
      Role,
      Scroll,
      SiteTitle,
      Source,
      Work
    },
    metaInfo: {
      title: 'Software engineer & other things',
      meta: ['description', 'og:description'].map(name => ({
        name,
        content: descriptions.home
      }))
    },
    data () {
      return {
        index: 0,
        interval: 8, // seconds
        updateLooper: null,
        isPortfolioLinkFocused: false,

        totalImageCount: this.$roles.length,
        loadedImageCount: 0,

        transitionSuffix: ''
      }
    },
    computed: {
      /**
       * Get whether all images required by the memoji ticker have been
       * fetched and cached for faster rendering.
       *
       * @returns {boolean} whether all images have been loaded
       */
      areImagesLoaded () {
        return this.loadedImageCount >= this.totalImageCount
      },

      /**
       * Get the name of the transition to apply on the horizontal tickers.
       * @return {string} the name of the horizontal ticker transition
       */
      horizontalTransitionName () {
        return `flip-horizontal${this.transitionSuffix}`
      },
      /**
       * Get the name of the transition to apply on the vertical tickers.
       * @return {string} the name of the vertical ticker transition
       */
      verticalTransitionName () {
        return `flip-vertical${this.transitionSuffix}`
      }
    },
    watch: {
      /**
       * Determine the transition name based on whether the animation is going
       * in the forward or backward direction.
       * @param {string} to - the new value of the index
       * @param {string} from - the old value of the index
       */
      index (to, from) {
        if (to > from) { // Animation is moving forward
          this.transitionSuffix = ''
        } else { // Animation is moving backward
          this.transitionSuffix = '-rev'
        }
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
