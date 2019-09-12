<template>
  <img class="memoji"
       :class="memojiClasses"
       :src="memojiSource"
       alt="Dhruv Bhanushali"
       title="That's what I look like, except I'm three dimensional.">
</template>

<script>
  import Scaled from '@/mixins/scaled'

  /**
   * This component displays my memoji in various styles.
   */
  export default {
    name: 'Memoji',
    mixins: [
      Scaled
    ],
    props: {
      role: {
        type: String,
        default: 'writer',
        validator: val => [
          'developer',
          'writer'
        ].includes(val)
      },
      /**
       * _whether or not to bobble my memoji_
       */
      isAnimated: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * _the classes to use on the memoji_
       */
      memojiClasses: function () {
        return [
          ...this.scaledClasses,

          {
            'animated': this.isAnimated
          }
        ]
      },
      memojiSource: function () {
        return require(`@/assets/memoji/${this.role}.png`)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Memoji.styl">
</style>
