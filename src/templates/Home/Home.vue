<template>
  <div class="home">
    <main>
      <div class="left pane">
        <RouterLink to="/portfolio">
          <transition name="rotate" mode="out-in">
            <Memoji
              :key="role"
              :role="role"/>
          </transition>
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
          :level="5"
          color="yellow">
          a
          <button
            class="role"
            :class="{'active': role === 'developer'}"
            @click="role = 'developer'">
            software developer</button>
          and
          <button
            class="role"
            :class="{'active': role === 'writer'}"
            @click="role = 'writer'">
            technical writer</button>
        </Heading>
        <p>
          who, with utmost <strong>love</strong> and <strong>passion</strong>,
          <br/>
          composes code, documentation and easter eggs
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
    data: function () {
      let random = Math.random()
      return {
        role: random < 0.5 ? 'writer' : 'developer'
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Home.styl">
</style>
