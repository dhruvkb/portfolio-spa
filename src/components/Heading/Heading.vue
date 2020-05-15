<template>
  <component
    :is="tag"
    class="heading"
    :class="headingClasses">
    <!-- @slot Content goes here -->
    <slot/>
  </component>
</template>

<script>
  import Colored from '@/mixins/colored'

  /**
   * This component displays a heading on the page.
   */
  export default {
    name: 'Heading',
    mixins: [
      Colored
    ],
    props: {
      /**
       * _the prominence of the heading in the page hierarchy_
       *
       * level ⩾ 1 and level ⩽ 6
       * @default 6
       */
      level: {
        type: Number,
        default: 6,
        validator: val => val >= 1 && val <= 6
      }
    },
    computed: {
      /**
       * _the heading tag from `h1` to `h6` to use for the component_
       */
      tag () {
        return `h${this.level}`
      },
      /**
       * _the classes to use on the heading_
       */
      headingClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Heading.scss">
</style>
