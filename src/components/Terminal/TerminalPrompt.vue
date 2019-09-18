<template>
  <span class="prompt">[guest@dhruvkb {{directory}}]$</span>
</template>

<script>
  /**
   * This component renders a Bash prompt, with the username, hostname and
   * current directory (as of printing).
   */
  export default {
    name: 'TerminalPrompt',
    props: {
      /**
       * _the directory to display in the prompt_
       */
      directory: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="stylus" src="./TerminalPrompt.styl">
</style>
