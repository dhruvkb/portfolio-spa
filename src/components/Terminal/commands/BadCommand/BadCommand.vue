<template>
  <div class="bad">
    <template v-if="command">
      Command <strong>{{ command }}</strong> does not exist in this CLI.
    </template>

    <template v-else>
      Command <strong>bad</strong> is not for public use.
    </template>

    Try <Executable :command="altCommand"/>.
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
      let name = 'help'
      let command = mapping[name]
      let description = command.description
      if (command.args && !command.args.includes('[')) {
        command = `${command.name} ${command.args}`
      } else {
        command = command.name
      }

      return {
        altCommand: {
          name: name,
          command: command,
          description: description
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
