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
        caretPosition: 0,
        traversal: {
          index: 0,
          backup: ''
        }
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
        'currentNode',
        'commandHistory'
      ])
    },
    methods: {
      traverseHistoryUp () {
        if (this.traversal.index === this.commandHistory.length) {
          return
        }

        if (this.traversal.index === 0) {
          this.traversal.backup = this.command
        }
        this.traversal.index++
        let index = this.commandHistory.length - this.traversal.index
        this.command = this.commandHistory[index].command
      },
      traverseHistoryDown () {
        if (this.traversal.index === 0) {
          return
        }

        this.traversal.index--
        if (this.traversal.index === 0) {
          this.command = this.traversal.backup
        } else {
          let index = this.commandHistory.length - this.traversal.index
          this.command = this.commandHistory[index].command
        }
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
          this.$nextTick(() => {
            this.$refs.commandField.scrollIntoView({
              behavior: 'smooth'
            })
          })
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
