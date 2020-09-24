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
   * This component renders a path as an SVG icon. It is primarily used to
   * render brand logos with paths from Simple Icons.
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

<style scoped lang="scss" src="./Repr.scss"/>
