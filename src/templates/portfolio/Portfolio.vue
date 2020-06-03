<template>
  <div class="portfolio">
    <RouterView/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import Executable from './components/executable/Executable'
  import Link from './components/link/Link'
  import Spinner from './components/spinner/Spinner'

  import fs from '@/templates/portfolio/data/fs.json'

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

  export const Portfolio = {
    Executable,
    Link,
    Spinner
  }
</script>
