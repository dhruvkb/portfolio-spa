<!--<template>-->
<!--  <main id="blog">-->
<!--    <transition-->
<!--      name="fade"-->
<!--      mode="out-in"-->
<!--      appear>-->
<!--      <RouterView/>-->
<!--    </transition>-->
<!--  </main>-->
<!--</template>-->

<!--<script>-->
<!--  import blogModule from '@/store/modules/blog'-->

<!--  import descriptions from '@/data/descriptions.json'-->

<!--  /**-->
<!--   * This page contains my writings. Why anyone would want to read the stuff I-->
<!--   * write is beyond my understanding.-->
<!--   */-->
<!--  export default {-->
<!--    name: 'Blog',-->
<!--    metaInfo: {-->
<!--      title: 'Blog',-->
<!--      meta: ['description', 'og:description'].map(name => ({-->
<!--        name,-->
<!--        content: descriptions.blog-->
<!--      }))-->
<!--    },-->
<!--    created () {-->
<!--      this.$store.registerModule('blog', blogModule)-->
<!--    },-->
<!--    beforeDestroy () {-->
<!--      this.$store.unregisterModule('blog')-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped lang="scss" src="./Blog.scss"/>-->
