<template>
  <div class="portfolio">
    <RouterView/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import fs from '@/data/fs.json'

  /**
   * This page describes my portfolio using an interactive CLI. This took me a
   * lot of effort to build and if you speak ill of it, I will hate you.
   */
  export default {
    name: 'Portfolio',
    methods: {
      ...mapMutations('portfolio', [
        'resetState',
        'setTree'
      ])
    },
    created () {
      // Reset terminal state
      this.resetState()

      // Set up filesystem tree
      this.setTree({
        fs: fs
      })
    }
  }
</script>
