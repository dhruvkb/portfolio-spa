<template>
  <div class="present">
    <label
      class="prompt-label"
      for="command-field"
      title="Click here to focus.">
      <TerminalPrompt :directory="currentNode.name"/>
    </label>
    <input
      v-model="command"
      class="command-field"
      id="command-field"
      :style="commandFieldStyles"
      ref="commandField"
      type="text"
      autofocus
      autocomplete="off"
      autocapitalize="off"
      spellcheck="false"
      @keydown.arrow-up.exact.prevent="traverseHistoryUp"
      @keydown.arrow-down.exact.prevent="traverseHistoryDown"
      @keydown.tab.exact.prevent="autocompleteCommand"
      @keydown.enter.exact.prevent="submitCommand"
      @keydown.c.ctrl.exact.prevent="cancelCommand"
      @keyup="processKeyUp">
    <span
      class="caret"
      :style="caretStyles"
      title="Click the prompt to focus.">&nbsp;</span>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  import TerminalPrompt from '@/components/Terminal/TerminalPrompt'

  /**
   * This command represents the present of the terminal, waiting for the user's
   * input with a prompt.
   */
  export default {
    name: 'TerminalPresent',
    components: {
      TerminalPrompt
    },
    data () {
      return {
        command: '',
        caretPosition: 0
      }
    },
    computed: {
      commandFieldStyles () {
        return {
          width: `${this.command.length}ch`
        }
      },
      caretStyles () {
        return {
          left: `${this.caretPosition - this.command.length}ch`
        }
      },

      ...mapState('terminal', [
        'currentNode'
      ])
    },
    methods: {
      traverseHistoryUp () {
        // TODO
        console.log('Request to traverse up')
      },
      traverseHistoryDown () {
        // TODO
        console.log('Request to traverse down')
      },
      autocompleteCommand () {
        // TODO
        console.log('Request to autocomplete:', this.command)
      },
      submitCommand () {
        if (this.command.trim()) {
          this.runCommand({
            command: this.command.substring(0)
          })
          this.command = ''
          this.$refs.commandField.scrollIntoView()
        }
      },
      cancelCommand () {
        this.command = ''
      },
      processKeyUp () {
        this.caretPosition = this.$refs.commandField.selectionStart
      },

      ...mapMutations('terminal', [
        'runCommand'
      ])
    },
    mounted () {
      this.$refs.commandField.focus()
    }
  }
</script>

<style scoped lang="stylus" src="./TerminalPresent.styl">
</style>
