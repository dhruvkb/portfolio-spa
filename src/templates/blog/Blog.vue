<template>
  <div class="blog">
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  import descriptions from '@/data/descriptions.json'

  /**
   * This page contains my writings. Why anyone would want to read the stuff I
   * write is beyond my understanding.
   */
  export default {
    name: 'Blog',
    metaInfo: {
      title: 'Blog',
      meta: ['description', 'og:description'].map(name => ({
        name,
        content: descriptions.blog
      }))
    }
  }
</script>
