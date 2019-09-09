<template>
  <div id="app">
    <!--
      <img alt="Vue logo" src="@/assets/face_normal.png">
      <img alt="Vue logo" src="@/assets/face_hat.png">
    -->

    <Hello/>
  </div>
</template>

<script>
  import Hello from '@/components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }
</script>

<style lang="stylus">
</style>
