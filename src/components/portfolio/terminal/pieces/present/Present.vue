<template>
  <div
    class="present"
    @click="takeFocus"
    title="[Ctrl + Shift + C] Focus on the terminal input.">
    <label
      class="prompt-label"
      for="command-field">
      <Prompt
        :directory="currentNode.name"
        is-active/>
    </label>
    <input
      v-shortkey.focus="['ctrl', 'shift', 'c']"
      v-model="command"
      class="command-field"
      id="command-field"
      :style="commandFieldStyles"

      type="text"
      autocomplete="off"
      autocapitalize="off"
      spellcheck="false"

      @keydown.escape.exact.prevent="loseFocus"
      @keydown.arrow-up.exact.prevent="traverseHistoryUp"
      @keydown.arrow-down.exact.prevent="traverseHistoryDown"
      @keydown.tab.exact.prevent="autocompleteCommand"
      @keydown.enter.exact.prevent="submitCommand"
      @keydown.c.shift.ctrl.exact.prevent="cancelCommand"
      @keyup.stop="processKeyup"
      @input.stop="processInput"
      @click.stop="processClick"

      ref="commandField">
    <span
      class="faux-caret"
      :style="fauxCaretStyles">&nbsp;</span>
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
    name: 'Present',
    components: {
      Prompt
    },
    data () {
      return {
        reactivityHack: 0,
        command: '',
        traversal: {
          index: 0,
          backup: ''
        }
      }
    },
    computed: {
      /**
       * Get the styles to apply on the command field.
       * @returns {Object} an mapping of CSS properties and values to apply on the element
       */
      commandFieldStyles () {
        return {
          '--characters-filled': `${this.command.length}ch`
        }
      },
      /**
       * Get the styles to apply on the faux caret.
       * @returns {Object} an mapping of CSS properties and values to apply on the element
       */
      fauxCaretStyles () {
        return {
          '--characters-displaced': `${this.caretPosition - this.command.length}ch`
        }
      },

      /**
       * Get the position of the caret in the command input field. Since this is
       * a non-reactive property, an ever changing data value `reactivityHack`
       * is accessed inside.
       */
      caretPosition () {
        if (!this.reactivityHack) {
          return
        }
        return this.$refs.commandField.selectionStart
      },

      ...mapState('portfolio', [
        'currentNode',
        'interactionHistory',
        'isProcessing'
      ])
    },
    watch: {
      /**
       * When interaction history is changed, which essentially means a new
       * interaction has been added, scroll to the bottom.
       */
      interactionHistory () {
        this.scrollToCommandField()
      },
      /**
       * When the processing state of the terminal is changed, either when
       * processing starts or ends, scroll to the bottom.
       */
      isProcessing () {
        this.scrollToCommandField()
      }
    },
    methods: {
      /**
       * Grab focus on the command input field from the document. Also moves the
       * caret to the end of the field.
       */
      takeFocus () {
        this.$refs.commandField.focus()
        this.$refs.commandField.setSelectionRange(
          this.command.length,
          this.command.length
        )
        this.reactivityHack++
      },
      /**
       * Give away the focus from the command input field.
       */
      loseFocus () {
        this.$refs.commandField.blur()
      },

      /**
       * Access the history stack backwards.
       */
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
      /**
       * Access the history stack forwards.
       */
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
      /**
       * Reset history traversal in both directions.
       */
      resetTraversal () {
        this.traversal = {
          index: 0,
          backup: ''
        }
      },

      /**
       * Autocomplete the command based on the text entered so far. It populates
       * the command field if an unambiguous completion can be made and if not,
       * displays a list of possible choices.
       */
      autocompleteCommand () {
        if (this.command === '') {
          this.command = 'help'
        } else {
          // TODO
          console.log('Request to autocomplete:', this.command)
        }
      },
      /**
       * Submit the command for processing and clear the history field for the
       * next input.
       */
      submitCommand () {
        if (this.command.trim()) {
          this.runCommand({
            command: this.command.substring(0)
          })
          this.command = ''
          this.resetTraversal()
        }
      },
      /**
       * Cancel the execution of the entered command and clear the input field.
       */
      cancelCommand () {
        this.command = ''
        this.resetTraversal()
      },

      /**
       * Handle a keyup event.
       * This involves updating the data variable `reactivityHack`.
       */
      processKeyup () {
        this.reactivityHack++
      },
      /**
       * Handle an input event.
       * This involves updating the data variable `reactivityHack`.
       */
      processInput () {
        this.reactivityHack++
      },
      /**
       * Handle a click event.
       * This involves updating the data variable `reactivityHack`.
       */
      processClick () {
        this.reactivityHack++
      },

      /**
       * Scroll to the bottom of the terminal to show the command field.
       */
      scrollToCommandField () {
        this.$nextTick(() => {
          document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          })
        })
      },

      ...mapActions('portfolio', [
        'runCommand'
      ])
    },
    /**
     * Ah, the reactivity hack.
     *
     * Refs in Vue are not reactive. So there is no way to reactively know the
     * position of the cursor in the input referenced by `commandField`. Even if
     * defined as a computed property, changes made to it are not observed.
     *
     * But we can make the computed property reactive by referring to a
     * different reactive property inside the function, which we update from
     * time to time. For any event occuring on the command input field with the
     * potential to update the value of `selectionStart`, we update the data
     * variable `reactivityHack` on the element. This causes the intended
     * recomputation of `caretPosition`.
     *
     * References:
     * - https://logaretm.com/blog/2019-10-11-forcing-recomputation-of-computed-properties/
     */
    mounted () {
      this.reactivityHack++
    }
  }
</script>

<style scoped lang="scss" src="./Present.scss"/>
