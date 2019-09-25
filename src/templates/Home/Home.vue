<template>
  <div class="home">
    <main>
      <div class="left pane">
        <RouterLink to="/portfolio">
          <div class="avatar-spinner">
            <transition name="rotate-horizontal" mode="out-in">
              <Memoji
                :key="index"
                :role="roles[index].replace(' ', '_')"/>
            </transition>
          </div>
        </RouterLink>
      </div>

      <div class="right pane">
        Hello there! I'm

        <Heading
          :level="1"
          color="red">
          Dhruv Bhanushali,
        </Heading>

        <Heading
          class="role"
          :level="5"
          color="yellow">
          <transition name="rotate-vertical" mode="out-in">
            <div :key="vowel">{{ vowel }}&nbsp;</div>
          </transition>
          <transition name="rotate-vertical" mode="out-in">
            <div :key="index">{{ roles[index] }}</div>
          </transition>
          <div class="border" :key="index">&nbsp;</div>
        </Heading>

        <p>
          who,
          with utmost <strong>love</strong> and <strong>passion</strong>,
          composes
          <br/>
          code, docs, designs, containers and easter eggs
          <br/>
          <span
            class="run-on"
            title="Such as movies, music and memes!">
            amongst other things.
          </span>
        </p>
      </div>
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
  import Heading from '@/components/Heading/Heading'
  import Memoji from '@/components/Memoji/Memoji'

  /**
   * This page is the landing page for the portfolio.
   */
  export default {
    name: 'Home',
    components: {
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
