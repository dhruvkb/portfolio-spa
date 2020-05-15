<template>
  <div
    class="couplet"
    :class="coupletClasses">
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
      },
      /**
       * _whether to align the centers of the major and minor text_
       */
      isCentered: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * Get the classes to use on the couplet.
       * @returns {Array} an array of all the classes to apply on the element
       */
      coupletClasses () {
        return [
          {
            'is-centered': this.isCentered
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Couplet.scss">
</style>
