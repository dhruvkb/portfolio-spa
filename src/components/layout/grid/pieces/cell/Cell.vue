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
       * [a=desktop]
       * is interpreted as [12, 12, a, a, a]
       *
       * [a=phone, b=desktop]
       * is interpreted as [a a, b, b, b]
       *
       * [a=phone, b=tablet, c=desktop]
       * is interpreted as [a, b, b, c, c]
       *
       * [a=phone, b=tablet, c=desktop-standard, d=desktop-wide]
       * is interpreted as [a, b, b, c, d]
       *
       * [a=phone, b=tablet-portrait, c=tablet-landscape, d=desktop-standard, e=desktop-wide]
       * is interpreted as [a, b, c, d, e]
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
          `phone-${this.spans.phone}-column-span`,
          `tablet-portrait-${this.spans.tabletPortrait}-column-span`,
          `tablet-landscape-${this.spans.tabletLandscape}-column-span`,
          `desktop-standard-${this.spans.desktopStandard}-column-span`,
          `desktop-wide-${this.spans.desktopWide}-column-span`
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
        let desktopWide = null

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
              tablet,
              desktop
            ] = spanSet
            break
          case 4:
            [
              phone,
              tablet,
              desktopStandard,
              desktopWide
            ] = spanSet
            break
          case 5:
            [
              phone,
              tabletPortrait,
              tabletLandscape,
              desktopStandard,
              desktopWide
            ] = spanSet
            break
        }

        // Fall back for empty values
        phone = phone || 12

        tabletPortrait = tabletPortrait || tablet || phone
        tabletLandscape = tabletLandscape || tablet || desktop

        desktopStandard = desktopStandard || desktop
        desktopWide = desktopWide || desktop

        return {
          phone,
          tabletPortrait,
          tabletLandscape,
          desktopStandard,
          desktopWide
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Cell.scss"/>
