<template>
  <div class="grid">
    <!-- @slot `Grid.Cell` components go here -->
    <slot/>
  </div>
</template>

<script>
  import Cell from './pieces/cell/Cell'

  /**
   * This component organises content on a 2D surface.
   */
  export default {
    name: 'Grid',

    // Child components
    Cell
  }

</script>

<style scoped lang="stylus" src="./Grid.styl">
</style>
