<template>
  <div class="portfolio">
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import fs from '@/data/portfolio/fs'

  /**
   * This page describes my portfolio using an interactive CLI.
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
