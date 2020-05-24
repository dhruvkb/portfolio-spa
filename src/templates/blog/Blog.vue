<template>
  <div class="blog">
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  import Spinner from './components/spinner/Spinner'

  export default {
    name: 'Blog'
  }

  export const Blog = {
    Spinner
  }
</script>
