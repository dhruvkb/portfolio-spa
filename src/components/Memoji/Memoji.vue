<template>
  <img class="memoji"
       :class="memojiClasses"
       alt="Dhruv Bhanushali"
       src="@/assets/memoji.png"
       title="That's what I look like, except real-er.">
</template>

<script>
  /**
   * This component displays my memoji in various styles.
   */
  export default {
    name: 'Memoji',
    props: {
      /**
       * _whether or not to bobble my memoji_
       */
      isAnimated: {
        type: Boolean,
        default: false
      },
      /**
       * _the size of the memoji to show_
       */
      size: {
        type: String,
        validator: val => [
          'small',
          'smaller',
          'smallest'
        ].includes(val)
      }
    },
    computed: {
      /**
       * _the classes to use on the memoji_
       */
      memojiClasses: function () {
        let classes = [
          {
            'animated': this.isAnimated
          }
        ]
        if (this.size) {
          classes.push(`${this.size}-sized`)
        }
        return classes
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Memoji.styl">
</style>
