<template>
  <div class="hello">
    {{ message }}
  </div>
</template>

<script>
  /**
   * This is a dummy component that is not meant to be used for any purpose.
   */
  export default {
    name: 'Hello',
    props: {
      /**
       * _the message to display in this component_
       *
       * @default 'Hello World!'
       */
      message: {
        type: String,
        default: 'Hello World!'
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Hello.styl">
</style>
