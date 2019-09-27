<template>
  <div class="grid">
    <!-- @slot `GridCell` components go here -->
    <slot/>
  </div>
</template>

<script>
  /**
   * This component organises content on a 2D surface.
   */
  export default {
    name: 'Grid'
  }
</script>

<style scoped lang="stylus" src="./Grid.styl">
</style>
