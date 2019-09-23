<template>
  <div class="terminal">
    <TerminalPast/>
    <TerminalPresent/>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  import TerminalPast from '@/components/Terminal/TerminalPast'
  import TerminalPresent from '@/components/Terminal/TerminalPresent'

  import fs from '@/data/portfolio/fs'

  /**
   * This is the terminal component, the textual playground for my portfolio.
   */
  export default {
    name: 'Terminal',
    components: {
      TerminalPast,
      TerminalPresent
    },
    methods: {
      ...mapMutations('terminal', [
        'resetState',
        'setTree'
      ]),
      ...mapActions('terminal', [
        'runCommand'
      ])
    },
    created () {
      // Reset terminal state
      this.resetState()

      // Set up filesystem tree
      this.setTree({
        fs: fs
      })

      // Run initial commands
      this.runCommand({
        command: 'intro'
      })

      // Switch to starting directory
      let startDir = this.$route.params.dir
      if (startDir === undefined || startDir === '') {
        // startDir is '~'
        // Do nothing
      } else {
        this.runCommand({
          command: `cd ~/${startDir}`
        })
      }

      // Show directory structure
      this.runCommand({
        command: 'tree .'
      })
    }
  }
</script>

<style scoped lang="stylus" src="./Terminal.styl">
</style>
