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
  /**
   * This component renders its contents with a CRT glitch effect.
   */
  export default {
    name: 'Glitch'
  }
</script>

<style scoped lang="scss" src="./Glitch.scss">
</style>
