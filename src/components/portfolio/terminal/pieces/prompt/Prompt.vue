<template>
  <span class="prompt" :class="promptClasses">
    <span class="big">
      [guest@dhruvkb <span class="directory">{{directory}}</span>]$</span>
    <span class="small">
      <span class="directory">{{directory}}</span>$</span>
  </span>
</template>

<script>
  /**
   * This component renders a Bash prompt, with the username, hostname and
   * current directory (as of printing).
   */
  export default {
    name: 'Prompt',
    props: {
      /**
       * _the directory to display in the prompt_
       */
      directory: {
        type: String,
        required: true
      },
      isActive: {
        type: Boolean
      }
    },
    computed: {
      promptClasses () {
        return [
          {
            active: this.isActive
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Prompt.scss"/>
