<template>
  <div class="blog">
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Blog'
  }
</script>
