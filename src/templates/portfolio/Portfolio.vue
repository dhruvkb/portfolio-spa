<template>
  <main id="portfolio">
    <RouterView/>
  </main>
</template>

<script>
  import { mapMutations } from 'vuex'

  import portfolioModule from '@/store/modules/portfolio'

  import descriptions from '@/data/descriptions.json'
  import fs from '@/data/fs.json'

  /**
   * This page describes my portfolio using an interactive CLI. This took me a
   * lot of effort to build and if you speak ill of it, I will hate you.
   */
  export default {
    name: 'Portfolio',
    metaInfo: {
      title: 'Portfolio',
      meta: ['description', 'og:description'].map(name => ({
        name,
        content: descriptions.portfolio
      }))
    },
    methods: {
      ...mapMutations('portfolio', [
        'setTree'
      ])
    },
    created () {
      this.$store.registerModule('portfolio', portfolioModule)

      // Set up filesystem tree
      this.setTree({
        fs: fs
      })
    },
    beforeDestroy () {
      this.$store.unregisterModule('portfolio')
    }
  }
</script>

<style scoped lang="scss" src="./Portfolio.scss"/>
