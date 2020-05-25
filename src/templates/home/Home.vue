<template>
  <div class="home">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell
            class="left pane"
            :span-set="[12, 6]">
            <div class="imagery">
              <RouterLink
                :to="{name: 'portfolio'}"
                title="See my portfolio."
                @mouseenter.native="stopLooping"
                @mouseleave.native="startLooping">
                <Memoji
                  :index="index"
                  :color="$getSolarizedColor(index)"/>
              </RouterLink>
            </div>
          </GridCell>

          <GridCell
            class="right pane"
            :span-set="[12, 6]">
            {{ $t('hello') }}! {{ $t('iam') }}
            <h1 class="site-title red-colored">
              {{ $t('dhruv') }}<br/>{{ $t('bhanushali') }}
            </h1>
            {{ $t('hats') }}

            <p class="roles">
              {{ $t('iam') }}
              <RouterLink
                :to="{name: 'portfolio'}"
                title="See my portfolio."
                @mouseenter.native="stopLooping"
                @mouseleave.native="startLooping">
                <Role
                  :index="index"
                  :color="$getSolarizedColor(index)"/>
              </RouterLink>
            </p>

            <p>
              <i18n path="composes" tag="span">
                <template #love>
                  <strong>{{ $t('love') }}</strong>
                </template>
                <template #passion>
                  <strong>{{ $t('passion') }}</strong>
                </template>
                <template #meticulousness>
                  <strong>{{ $t('meticulousness') }}</strong>
                </template>
              </i18n>
              <br/>
              {{ $t('compositions') }}
              <br/>
              <span
                class="secondary-colored"
                :title="`${$t('3m')}${$t('fullstop')}`">
                {{ $t('other') }}{{ $t('fullstop') }}
              </span>
            </p>
          </GridCell>
        </Grid>

        <footer>
          <Kaomoji/>
          <Locale/>
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
  import Grid from '@/components/grid/Grid'
  import Locale from '@/components/locale/Locale'

  import Kaomoji from './components/kaomoji/Kaomoji'
  import Memoji from './components/memoji/Memoji'
  import Role from './components/role/Role'

  /**
   * This page is the landing page for the portfolio.
   */
  export default {
    name: 'Home',
    components: {
      Grid,
      'GridCell': Grid.Cell,
      Locale,

      Kaomoji,
      Memoji,
      Role
    },
    data () {
      return {
        index: 0,
        interval: 8,
        updateLooper: null
      }
    },
    methods: {
      /**
       * Start the loop that changes memoji and role periodically.
       */
      startLooping () {
        this.updateLooper = setInterval(() => {
          this.index = ++this.index % this.$roles.length
        }, this.interval * 1000)
      },
      /**
       * Stop the loop that changes memoji and role periodically.
       */
      stopLooping () {
        clearInterval(this.updateLooper)
      }
    },
    created: function () {
      this.startLooping()
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
