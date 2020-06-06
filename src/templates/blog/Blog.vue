<template>
  <div class="blog">
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  import Spinner from './components/spinner/Spinner'
  import Metadata from './components/metadata/Metadata'

  /**
   * This page contains my writings. Why anyone would want to read the stuff I
   * write is beyond my understanding.
   */
  export default {
    name: 'Blog'
  }

  export const Blog = {
    Spinner,
    Metadata
  }
</script>
