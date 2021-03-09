<template>
  <div class="memoji" :class="memojiClasses">
    <img
      :key="role"
      class="image"
      :src="source"
      alt="Suning Yao"
      :title="title"/>
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
    }
  }
</script>

<style scoped lang="scss" src="./Memoji.scss"/>
