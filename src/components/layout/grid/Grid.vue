<template>
  <div
    class="grid"
    :style="gridStyles">
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
    props: {
      /**
       * _the number of columns to have on the grid_
       */
      columnCount: {
        type: Number,
        default: 12
      },
      /**
       * _the number of rows to have on the grid_
       */
      rowCount: {
        type: Number,
        default: 1
      }
    },
    computed: {
      /**
       * Get the styles to apply on the grid.
       * @returns {Object} an mapping of CSS properties and values to apply on the element
       */
      gridStyles () {
        return {
          '--column-count': this.columnCount,
          '--row-count': this.rowCount
        }
      }
    },

    // Child components
    Cell
  }
</script>

<style scoped lang="scss" src="./Grid.scss"/>
