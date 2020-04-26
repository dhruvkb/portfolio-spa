<template>
  <div
    class="kaomoji"
    title="Wonderful to meet you!">
      <span class="face">{{ face }}</span>
      <span class="wave">ﾉ</span>
  </div>
</template>

<script>
  export default {
    name: 'Kaomoji',
    data () {
      return {
        faces: [
          '( ˇ ◡ ˇ )',
          '( ❛ ᴗ ❛ )',
          '( ＾ ◡ ＾ )',
          '( ´ ▽ ` )',
          '(´｡• ᵕ •｡`)',
          '( ◕ヮ◕ )'
        ]
      }
    },
    computed: {
      face () {
        let random = Math.floor(Math.random() * this.faces.length)
        return this.faces[random]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Kaomoji.scss">
</style>
