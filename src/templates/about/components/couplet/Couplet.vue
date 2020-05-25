<template>
  <div class="couplet">
    <div class="dom">{{ dom }}</div>
    <div class="sub">{{ sub }}</div>
  </div>
</template>

<script>
  /**
   * This component presents two pieces information in the form of a major and minor point.
   */
  export default {
    name: 'Couplets',
    props: {
      /**
       * _the major text in the couplet_
       */
      dom: {
        type: String,
        required: true
      },
      /**
       * _the minor text in the couplet_
       */
      sub: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss" src="./Couplet.scss">
</style>
