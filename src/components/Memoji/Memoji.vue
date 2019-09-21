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
        default: 'technical_writer',
        validator: val => [
          'software_developer',
          'technical_writer',
          'design_dabbler',
          'easter_eggsmith'
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
        let title = 'Look\'s like I\'m missing a dimension.'
        switch (this.role) {
          case 'software_developer':
            title = 'Where did I miss a semicolon?'
            break
          case 'technical_writer':
            title = 'Whoa, a LaTeX-typeset equation!'
            break
          case 'design_dabbler':
            title = 'Hmmm, how about a pixel to the left?'
            break
          case 'easter_eggsmith':
            title = '⇧ ⇧ ⇩ ⇩ ⇦ ⇨ ⇦ ⇨ B A!'
            break
        }
        return title
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Memoji.styl">
</style>
