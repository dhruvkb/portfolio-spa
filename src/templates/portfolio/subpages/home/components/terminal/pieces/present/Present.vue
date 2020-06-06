<template>
  <div
    class="present"
    @click="takeFocus"
    title="[Ctrl + Shift + C] Focus on the prompt.">
    <label
      class="prompt-label"
      for="command-field">
      <Prompt :directory="currentNode.name"/>
    </label>
    <input
      v-shortkey.focus="['ctrl', 'shift', 'c']"
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
      @keydown.escape.exact.prevent="loseFocus"
      @keydown.arrow-up.exact.prevent="traverseHistoryUp"
      @keydown.arrow-down.exact.prevent="traverseHistoryDown"
      @keydown.tab.exact.prevent="autocompleteCommand"
      @keydown.enter.exact.prevent="submitCommand"
      @keydown.c.shift.ctrl.exact.prevent="cancelCommand"
      @keyup="processKeyUp">
    <span
      class="caret"
      :style="caretStyles">&nbsp;</span>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import Prompt from '../prompt/Prompt'

  /**
   * This command represents the present of the terminal, waiting for the user's
   * input with a prompt.
   */
  export default {
    name: 'TerminalPresent',
    components: {
      Prompt
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
    watch: {
      interactionHistory () {
        this.scrollToCommandField()
      },
      isProcessing () {
        this.scrollToCommandField()
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

      ...mapState('portfolio', [
        'currentNode',
        'interactionHistory',
        'isProcessing'
      ])
    },
    methods: {
      takeFocus () {
        this.$refs.commandField.focus()
      },
      loseFocus () {
        this.$refs.commandField.blur()
      },

      traverseHistoryUp () {
        if (this.traversal.index === this.interactionHistory.length) {
          return
        }

        if (this.traversal.index === 0) {
          this.traversal.backup = this.command
        }
        this.traversal.index++
        const index = this.interactionHistory.length - this.traversal.index
        this.command = this.interactionHistory[index].input.command
      },
      traverseHistoryDown () {
        if (this.traversal.index === 0) {
          return
        }

        this.traversal.index--
        if (this.traversal.index === 0) {
          this.command = this.traversal.backup
        } else {
          const index = this.interactionHistory.length - this.traversal.index
          this.command = this.interactionHistory[index].input.command
        }
      },
      resetTraversal () {
        this.traversal = {
          index: 0,
          backup: ''
        }
      },

      autocompleteCommand () {
        if (this.command === '') {
          this.command = 'help'
        } else {
          // TODO
          console.log('Request to autocomplete:', this.command)
        }
      },
      submitCommand () {
        if (this.command.trim()) {
          this.runCommand({
            command: this.command.substring(0)
          })
          this.command = ''
          this.resetTraversal()
        }
      },
      cancelCommand () {
        this.command = ''
        this.resetTraversal()
      },

      processKeyUp () {
        if (this.$refs.commandField) {
          // This situation may arise if a command leads to a route change
          // For example, vim
          this.caretPosition = this.$refs.commandField.selectionStart
        }
      },

      scrollToCommandField () {
        this.$nextTick(() => {
          this.$refs.commandField.scrollIntoView({
            behavior: 'smooth'
          })
        })
      },

      ...mapActions('portfolio', [
        'runCommand'
      ])
    },
    mounted () {
      this.$refs.commandField.focus()
    }
  }
</script>

<style scoped lang="stylus" src="./Present.styl">
</style>
