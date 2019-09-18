<template>
  <div class="bad">
    <template v-if="command">
      Command <strong>{{ command }}</strong> does not exist in this CLI.
    </template>

    <template v-else>
      Command <strong>bad</strong> is not for public use.
    </template>

    Try <Executable :command="helpCommand"/>.
  </div>
</template>

<script>
  import Executable from '@/components/Terminal/blocks/Executable/Executable'

  import { mapping } from '@/components/Terminal/commands'

  /**
   * This command shows that a given command does not exist in the CLI.
   */
  export default {
    name: 'BadCommand',
    components: {
      Executable
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      args: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        helpCommand: {
          name: 'help',
          command: 'help',
          description: mapping.help.description
        }
      }
    },
    computed: {
      /**
       * _the command that resulted in a bad command error_
       */
      command () {
        return this.args[0]
      }
    }
  }
</script>
