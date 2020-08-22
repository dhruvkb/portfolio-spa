<template>
  <div class="terminal">
    <Past/>
    <Present/>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  import Past from './pieces/past/Past'
  import Present from './pieces/present/Present'

  /**
   * This is the terminal component, the textual playground for my portfolio.
   */
  export default {
    name: 'Terminal',
    components: {
      Past,
      Present
    },
    computed: {
      ...mapState('portfolio', [
        'isFirstRun'
      ])
    },
    methods: {
      ...mapMutations('portfolio', [
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

        // Show help
        this.runCommand({
          command: 'help'
        })

        // Indicate first run to be complete
        this.setIsFirstRun({
          isFirstRun: false
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./Terminal.scss"/>
