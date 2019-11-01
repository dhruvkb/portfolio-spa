<template>
  <div class="glitch">
    <div class="clone one">
      <slot/>
    </div>
    <div class="clone two">
      <slot/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Glitch'
  }
</script>

<style scoped lang="stylus" src="./Glitch.styl">
</style>
