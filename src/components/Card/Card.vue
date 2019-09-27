<template>
  <div class="card">
    <div class="title">
      <!-- @slot Title goes here -->
      <slot name="title"/>
    </div>
    <div class="content">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  /**
   * This component renders a minimalistic card.
   */
  export default {
    name: 'Card'
  }
</script>

<style scoped lang="stylus" src="./Card.styl">
</style>
