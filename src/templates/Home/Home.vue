<template>
  <div class="home">
    <main>
      <Grid>
        <GridCell
          class="left pane"
          :span-set="[12, 6]">
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
        </GridCell>
        <GridCell
          class="right pane"
          :span-set="[12, 6]">
          Hello there! I'm

          <Heading
            :level="1"
            color="red">
            Dhruv Bhanushali,
          </Heading>

          <Heading
            class="role"
            :level="4">
            <transition appear name="flip-vertical" mode="out-in">
              <div
                :key="vowel"
                class="secondary-colored">
                {{ vowel }}&nbsp;
              </div>
            </transition>
            <transition appear name="flip-vertical" mode="out-in">
              <div
                :key="index"
                :class="`${$getSolarizedColor(index)}-colored`">
                {{ roles[index] }}
              </div>
            </transition>
            <div class="border plus" :key="index">&nbsp;</div>
          </Heading>

          <p>
            who,
            with utmost <strong>love</strong> and <strong>passion</strong>,
            composes
            <br/>
            code, docs, designs, containers and easter eggs
            <br/>
            <span
              class="secondary-colored"
              title="Such as movies, music and memes!">
            amongst other things.
          </span>
          </p>
        </GridCell>
      </Grid>
    </main>

    <footer title="Wonderful to meet you!">
      <span class="face">
        ( ˇ ▽ ˇ )
      </span>
      <span class="wave">
        ﾉ
      </span>
    </footer>
  </div>
</template>

<script>
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'

  import Memoji from './elements/Memoji/Memoji'

  /**
   * This page is the landing page for the portfolio.
   */
  export default {
    name: 'Home',
    components: {
      Grid,
      GridCell,
      Heading,
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
