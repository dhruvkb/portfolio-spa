<template>
  <div class="whoami">
    <span class="yellow-colored">
      <template v-if="args.groot">Groot</template>
      <template v-else>guest</template>
    </span>
  </div>
</template>

<script>
  import argumented from '@/mixins/argumented'

  /**
   * This command, one of the simplest, gives your own username.
   */
  export default {
    name: 'WhoAmI',
    mixins: [
      argumented
    ],
    argSpec: {
      args: [],
      kwargs: [
        {
          name: '--groot',
          type: Boolean,
          aliases: [
            '-g'
          ]
        }
      ]
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      argv: {
        type: Array
      }
    }
  }
</script>
