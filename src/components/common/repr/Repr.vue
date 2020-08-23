<template>
  <div class="repr">
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        :d="path"/>
    </svg>
  </div>
</template>

<script>
  /**
   * This component renders a path as an SVG icon.
   */
  export default {
    name: 'Repr',
    props: {
      /**
       * _the path to draw the icon_
       */
      path: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" src="./Repr.scss"/>
