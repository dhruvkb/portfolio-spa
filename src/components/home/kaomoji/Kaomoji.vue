<template>
  <div
    class="kaomoji"
    :title="greeting">
    <span class="face">{{ face }}</span>
    <span class="hand">ﾉ</span>
  </div>
</template>

<script>
  /**
   * This component displays a waving composite kaomoji.
   */
  export default {
    name: 'Kaomoji',
    data () {
      return {
        edgesList: [
          ['(', ')']
        ],
        eyesList: [
          ['ˇ', 'ˇ'],
          ['❛', '❛'],
          ['^', '^'],
          ['＾', '＾'],
          ['´•', '•`'],
          ['◕', '◕']
        ],
        mouthList: [
          '◡',
          'ᴗ',
          'ᵕ',
          '▽',
          'ヮ',
          '*'
        ],
        greetingList: [
          'Wonderful to meet you!',
          'Meeting you is a delight!',
          'You\'re breathtaking!'
        ]
      }
    },
    computed: {
      /**
       * Get a face comprising of randomly chosen parts.
       * @returns {string} the assembled face
       */
      face () {
        const [edgeLeft, edgeRight] = this.edgesList[
          Math.floor(Math.random() * this.edgesList.length)
        ]
        const [eyeLeft, eyeRight] = this.eyesList[
          Math.floor(Math.random() * this.eyesList.length)
        ]
        const mouth = this.mouthList[
          Math.floor(Math.random() * this.mouthList.length)
        ]

        return `${edgeLeft} ${eyeLeft} ${mouth} ${eyeRight} ${edgeRight}`
      },
      greeting () {
        return this.greetingList[
          Math.floor(Math.random() * this.greetingList.length)
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Kaomoji.scss"/>
