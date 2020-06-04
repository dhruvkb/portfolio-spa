<template>
  <div class="cell" :class="cellClasses">
    <!-- @slot Content goes here -->
    <slot>&nbsp;</slot>
  </div>
</template>

<script>
  /**
   * This component is one cell in a grid layout.
   */
  export default {
    name: 'Cell', // Always use as Grid.Cell
    props: {
      /**
       * _the number of slices this column should span on different devices_
       *
       * Note that in a 12-slice grid, the number of columns that can be
       * accommodated is 12 / span.
       *
       * Other than desktop, all values have a default and will be resolved as
       * follows. On phones and tablets in portrait orientation, the cell
       * occupies all twelve slices. Tablets in landscape orientation and big
       * desktops fall back to the slices configured for the standard desktop.
       *
       * With these fallbacks in mind, depending on the length of the array,
       * the values are interpreted differently.
       *
       * ```
       * [desktop]
       * [phone, desktop]
       * [phone, desktop-standard, desktop-big]
       * [phone, tablet, desktop-standard, desktop-big]
       * [phone, tablet-portrait, tablet-landscape, desktop-standard, desktop-big]
       * ```
       */
      spanSet: {
        type: Array,
        required: true,
        validator: val => val.length >= 1 && val.length <= 5 && val.every(
          span => span >= 1 && span <= 12
        )
      }
    },
    computed: {
      /**
       * Get the classes to use on the grid cell.
       * @returns {Array} an array of all the classes to apply on the element
       */
      cellClasses: function () {
        return [
          `phone-${this.spans.phone}-wide`,
          `tablet-portrait-${this.spans.tabletPortrait}-wide`,
          `tablet-landscape-${this.spans.tabletLandscape}-wide`,
          `desktop-standard-${this.spans.desktopStandard}-wide`,
          `desktop-big-${this.spans.desktopBig}-wide`
        ]
      },

      /**
       * Get the number of columns to span for each device category.
       * @returns {Object} a mapping of device category and column spans
       */
      spans: function () {
        const spanSet = this.spanSet
        const count = spanSet.length

        // Start with null
        let phone = null

        let tablet = null
        let tabletPortrait = null
        let tabletLandscape = null

        let desktop = null
        let desktopStandard = null
        let desktopBig = null

        // Assign list items
        switch (count) {
          case 1:
            [
              desktop
            ] = spanSet
            break
          case 2:
            [
              phone,
              desktop
            ] = spanSet
            break
          case 3:
            [
              phone,
              desktopStandard,
              desktopBig
            ] = spanSet
            break
          case 4:
            [
              phone,
              tablet,
              desktopStandard,
              desktopBig
            ] = spanSet
            break
          case 5:
            [
              phone,
              tabletPortrait,
              tabletLandscape,
              desktopStandard,
              desktopBig
            ] = spanSet
            break
        }

        // Fall back for empty values
        phone = phone || 12

        tabletPortrait = tabletPortrait || tablet || phone
        tabletLandscape = tabletLandscape || tablet || desktop

        desktopStandard = desktopStandard || desktop
        desktopBig = desktopBig || desktop

        return {
          phone,
          tabletPortrait,
          tabletLandscape,
          desktopStandard,
          desktopBig
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Cell.scss">
</style>
