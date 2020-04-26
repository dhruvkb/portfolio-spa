<template>
  <div
    class="memoji"
    :class="memojiClasses">
    <transition appear name="flip-horizontal" mode="out-in">
      <img
        :key="role"
        class="image"
        :src="source"
        alt="Dhruv Bhanushali"
        :title="title">
    </transition>
  </div>
</template>

<script>
  import Colored from '@/mixins/colored'

  /**
   * This component displays my memoji in various colours.
   */
  export default {
    name: 'Memoji',
    mixins: [
      Colored
    ],
    props: {
      /**
       * _the role being depicted by the memoji_
       */
      role: {
        type: String,
        default: 'technical_writer'
      }
    },
    computed: {
      /**
       * _the classes to use on the memoji_
       */
      memojiClasses () {
        return [
          ...this.coloredClasses
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
          case 'infrastructure_architect':
            title = 'Containers all the way down!'
            break
          case 'technical_writer':
            title = 'Whoa, a LaTeX-typeset equation!'
            break
          case 'design_dabbler':
            title = 'Hmmm, maybe a pixel to the left?'
            break
          case 'open_sourcerer':
            title = 'Feel free to fork my repository of spells.'
            break
          case 'easter_eggsmith':
            title = '⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A!'
            break
        }
        return title
      }
    }
  }
</script>

<style scoped lang="scss" src="./Memoji.scss">
</style>
