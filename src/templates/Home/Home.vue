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
                title="See my portfolio">
                <div class="avatar-spinner">
                  <transition appear name="flip-horizontal" mode="out-in">
                    <Memoji
                      :key="index"
                      :role="roles[index].replace(' ', '_')"/>
                  </transition>
                </div>

                <!-- Sinful terrible hack to prefetch images -->
                <div style="display: none;">
                  <Memoji
                    v-for="(role, index) in roles"
                    :key="index"
                    :role="role.replace(' ', '_')"/>
                </div>
                <!-- Sin ends here -->
              </RouterLink>
            </div>
          </GridCell>

          <GridCell
            class="right pane"
            :span-set="[12, 6]">
            {{ $t('hello') }}! {{ $t('iam') }}

            <Heading :level="1">
            <span class="red-colored">
            {{ $t('dhruv') }} {{ $t('bhanushali') }}</span>,
            </Heading>

            <Heading
              class="role"
              :level="4">
              <transition appear name="flip-vertical" mode="out-in">
                <div
                  :key="vowel"
                  class="secondary-colored">
                  {{ $t(vowel) }}&nbsp;
                </div>
              </transition>
              <transition appear name="flip-vertical" mode="out-in">
                <div
                  :key="index"
                  :class="`${$getSolarizedColor(index)}-colored`">
                  {{ $t(`roles.${roles[index]}`) }}
                </div>
              </transition>
              <div class="border plus" :key="index">&nbsp;</div>
            </Heading>

            <p>
              <i18n path="who" tag="span">
                <template #love>
                  <strong>{{ $t('love') }}</strong>
                </template>
                <template #passion>
                  <strong>{{ $t('passion') }}</strong>
                </template>
              </i18n>
              <br/>
              {{ $t('compositions') }}
              <br/>
              <span
                class="secondary-colored"
                :title="$t('3m')">
                  {{ $t('other') }}
                </span>
            </p>
          </GridCell>
        </Grid>

        <footer>
          <div
            class="kaomoji"
            title="Wonderful to meet you!">
            <span class="face">
              ( ˇ ▽ ˇ )
            </span>
                <span class="wave">
              ﾉ
            </span>
          </div>
          <Locale v-show="false"/>
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'

  import Memoji from './elements/Memoji/Memoji'
  import Locale from '@/components/Locale/Locale'

  /**
   * This page is the landing page for the portfolio.
   */
  export default {
    name: 'Home',
    components: {
      Grid,
      GridCell,
      Heading,
      Locale,
      Memoji
    },
    data () {
      return {
        roles: [
          'open sourcerer',
          'software developer',
          'technical writer',
          'design dabbler',
          'infrastructure architect',
          'easter eggsmith'
        ],
        index: 0,
        interval: 8,
        updateLooper: null
      }
    },
    computed: {
      vowel () {
        return [
          'a',
          'e',
          'i',
          'o',
          'u'
        ].includes(this.roles[this.index].charAt(0))
          ? 'an'
          : 'a'
      }
    },
    methods: {
      startLooping () {
        this.updateLooper = setInterval(() => {
          this.index = ++this.index % this.roles.length
        }, this.interval * 1000)
      }
    },
    created: function () {
      this.startLooping()
    },
    beforeDestroy () {
      clearInterval(this.updateLooper)
    }
  }
</script>

<style scoped lang="stylus" src="./Home.styl">
</style>

<i18n src="./lang.json">
</i18n>
