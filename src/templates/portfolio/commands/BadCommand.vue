<template>
  <div class="bad">
    <template v-if="args.cmdname">
      Command <strong>{{ args.cmdname }}</strong> does not exist in this CLI.
    </template>

    <template v-else>
      Command <strong>bad</strong> is not for public use.
    </template>

    Try
    <Executable :command="altCommand" :argv="altArgv"/>.
  </div>
</template>

<script>
  import Executable from '@/components/portfolio/executable/Executable'

  import argumented from '@/mixins/argumented'

  import { mapping } from './index'

  /**
   * This command shows that a given command does not exist in the CLI.
   */
  export default {
    name: 'BadCommand',
    mixins: [
      argumented
    ],
    components: {
      Executable
    },
    argSpec: {
      args: [
        {
          name: 'cmdname',
          type: String
        }
      ],
      kwargs: []
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      argv: {
        type: Array
      }
    },
    data () {
      return {
        altCommand: mapping.help,
        altArgv: []
      }
    }
  }
</script>
