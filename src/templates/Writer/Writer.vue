<template>
  <div class="writer">
    <Hello message="Hello reader!"/>
  </div>
</template>

<script>
  import Hello from '@/components/Hello/Hello'

  export default {
    name: 'Writer',
    components: {
      Hello
    }
  }
</script>

<style scoped lang="stylus" src="./Writer.styl">
</style>
