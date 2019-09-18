<template>
  <img
    class="memoji"
    :class="memojiClasses"
    :src="source"
    alt="Dhruv Bhanushali"
    :title="title">
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
      /**
       * _the role being depicted by the memoji_
       */
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
      },
      /**
       * _whether or not to show a white outline on the edges of the memoji_
       */
      isOutlined: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      /**
       * _the classes to use on the memoji_
       */
      memojiClasses () {
        return [
          ...this.scaledClasses,

          {
            'animated': this.isAnimated,
            'outline': this.isOutlined
          }
        ]
      },
      /**
       * _the imported PNG source of the memoji_
       */
      source () {
        return require(`@/assets/memoji/${this.role}.png`)
      },
      /**
       * _the appropriate title text for the memoji_
       */
      title () {
        return this.role === 'developer'
          ? 'Gotta put on my thinking "red hat".'
          : 'It\'s me, except I\'m in "3D".'
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Memoji.styl">
</style>
