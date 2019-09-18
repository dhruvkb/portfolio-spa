<template>
  <div class="portfolio">
    <main>
      <Terminal/>
    </main>
  </div>
</template>

<script>
  import Terminal from '@/components/Terminal/Terminal'

  /**
   * This page describes my portfolio using an interactive CLI.
   */
  export default {
    name: 'Portfolio',
    components: {
      Terminal
    }
  }
</script>

<style scoped lang="stylus" src="./Portfolio.styl">
</style>
