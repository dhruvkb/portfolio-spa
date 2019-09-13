<template>
  <img class="memoji"
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
      memojiClasses: function () {
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
      source: function () {
        return require(`@/assets/memoji/${this.role}.png`)
      },
      title: function () {
        let title
        switch (this.role) {
          case 'developer':
            title = 'Gotta put on my thinking "red hat".'
            break
          case 'writer':
            title = 'It\'s me, except I\'m in "3D".'
            break
        }
        return title
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Memoji.styl">
</style>
