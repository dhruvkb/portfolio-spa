<template>
  <div class="developer">
    <Hello message="Hello user!"/>
  </div>
</template>

<script>
  import Hello from '@/components/Hello/Hello'

  export default {
    name: 'Developer',
    components: {
      Hello
    }
  }
</script>

<style scoped lang="stylus" src="./Developer.styl">
</style>
