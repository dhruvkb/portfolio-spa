<template>
  <div class="about">
    <!-- TODO Put actual content -->

    <Hello message="About"/>
    <Memoji
      size="small"
      is-animated/>
  </div>
</template>

<script>
  import Hello from '@/components/Hello/Hello'
  import Memoji from '@/components/Memoji/Memoji'

  /**
   * This page describes me in deep, verging on excruciating, detail.
   */
  export default {
    name: 'About',
    components: {
      Memoji,
      Hello
    }
  }
</script>

<style scoped lang="stylus" src="./About.styl">
</style>
