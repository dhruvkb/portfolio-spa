<template>
  <div class="memoji" :class="memojiClasses">
    <transition appear :name="transitionName" mode="out-in">
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
  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  /**
   * This component iterates over my memoji.
   */
  export default {
    name: 'Memoji',
    mixins: [
      colored,
      focusable
    ],
    data () {
      return {
        transitionName: 'flip-horizontal'
      }
    },
    props: {
      /**
       * _the index of the role being depicted by the memoji_
       */
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      /**
       * Get the classes to use on the memoji ticker.
       * @returns {Array} an array of all the classes to apply on the element
       */
      memojiClasses () {
        return [
          ...this.coloredClasses,
          { ...this.focusableClasses }
        ]
      },

      /**
       * Get the role at the index specified by the prop.
       * @returns {string} the underscored role
       */
      role () {
        return this.$getRole(this.index)
      },
      /**
       * Get the imported PNG source of the memoji.
       * @returns {string} the path to the relevant memoji image
       */
      source () {
        return require(`@/assets/memoji/${this.role}.png`)
      },
      /**
       * Get the appropriate title text for the memoji.
       * @returns {string} the text to use in the title attribute
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
    },
    watch: {
      /**
       * Determine the transition name based on whether the animation is going
       * in the forward or backward direction.
       * @param {string} to - the new value of the index
       * @param {string} from - the old value of the index
       */
      index (to, from) {
        if (to > from) { // Animation is moving forward
          this.transitionName = 'flip-horizontal'
        } else { // Animation is moving backward
          this.transitionName = 'flip-horizontal-rev'
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Memoji.scss">
</style>
