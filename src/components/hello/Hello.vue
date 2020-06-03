<template>
  <div class="hello">
    {{ message }}
  </div>
</template>

<script>
  /**
   * This component is a dummy that is not meant to be used for any purpose
   * except as a stand-in for unit testing.
   */
  export default {
    name: 'Hello',
    props: {
      /**
       * _the message to display in this component_
       */
      message: {
        type: String,
        default: 'Hello World!'
      }
    }
  }
</script>

<style scoped lang="scss" src="./Hello.scss">
</style>
