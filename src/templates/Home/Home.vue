<template>
  <div class="home">
    <main>
      <p>
        Hello there! I'm
      </p>
      <Heading
        class="title"
        :level="1"
        color="red">
        Dhruv Bhanushali,
      </Heading>
      <Heading
        :level="5"
        color="yellow">
        a software developer and technical writer
      </Heading>
      <p>
        who composes software and documentation<br/>
        with utmost <strong>love</strong> and <strong>passion</strong>.
      </p>
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

  /**
   * This page is the landing page for the portfolio.
   */
  export default {
    name: 'Home',
    components: {
      Heading
    }
  }
</script>

<style scoped lang="stylus" src="./Home.styl">
</style>
