<template>
  <div class="past">
    <template v-for="(command, index) in commandHistory">
      <div
        class="interaction"
        :key="index">
        <TerminalPrompt :directory="command.directory"/>{{ command.command }}
        <component
          class="output"
          :is="command.output.component"
          :args="command.output.args"/>
      </div>
    </template>
  </div>
</template>

<script type="text/jsx">
  import { mapState } from 'vuex'

  import TerminalPrompt from '@/components/Terminal/TerminalPrompt'

  import { components } from '@/components/Terminal/commands'

  /**
   * This component represents the past of the terminal, displaying all the
   * interactions the user has had with the terminal leading upto the present.
   */
  export default {
    name: 'TerminalPast',
    components: {
      TerminalPrompt,

      // Components representing commands
      ...components
    },
    computed: {
      ...mapState('terminal', [
        'commandHistory'
      ])
    }
  }
</script>

<style scoped lang="stylus" src="./TerminalPast.styl">
</style>
