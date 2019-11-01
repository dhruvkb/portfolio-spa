<template>
  <div class="terminal">
    <TerminalPast/>
    <TerminalPresent/>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  import TerminalPast from '@/templates/Portfolio/components/Terminal/TerminalPast'
  import TerminalPresent from '@/templates/Portfolio/components/Terminal/TerminalPresent'

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
    computed: {
      ...mapState('portfolio', [
        'isFirstRun'
      ])
    },
    methods: {
      ...mapMutations('portfolio', [
        'resetState',
        'setTree',
        'setIsFirstRun'
      ]),
      ...mapActions('portfolio', [
        'runCommand'
      ])
    },
    created () {
      if (this.isFirstRun) {
        // Run initial commands
        this.runCommand({
          command: 'intro'
        })

        // Show directory structure
        this.runCommand({
          command: 'ls'
        })

        // Indicate first run to be complete
        this.setIsFirstRun({
          isFirstRun: false
        })
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Terminal.styl">
</style>
