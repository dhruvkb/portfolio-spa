<template>
  <span class="green-colored">
    <a
      href="#"
      :title="command.description"
      @click.prevent="execute">
      <strong>{{ command.name }}</strong>
    </a>
  </span>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Executable',
    props: {
      /**
       * _the command to generate the executable for_
       */
      command: {
        type: Object,
        required: true
      }
    },
    methods: {
      /**
       * _retrieve and execute the appropriate command_
       */
      execute () {
        this.runCommand({
          command: this.command.command
        })
      },

      ...mapMutations('terminal', [
        'runCommand'
      ])
    }
  }
</script>
