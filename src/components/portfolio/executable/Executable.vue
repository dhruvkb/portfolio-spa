<template>
  <span class="green-colored">
    <a
      href="#"
      :title="command.description"
      @click.prevent="handleClick">
      <strong>{{ generatedCommand }}</strong>
    </a>
  </span>
</template>

<script>
  import { mapActions } from 'vuex'

  /**
   * This blocks represents a link to an executable command, which can be clicked
   * with a mouse, instead of keyboard input, to invoke the command.
   */
  export default {
    name: 'Executable',
    props: {
      /**
       * _the command to generate the executable for_
       */
      command: {
        type: Object,
        required: true
      },
      /**
       * _the arguments passed to the command_
       */
      argv: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      generatedCommand () {
        let genCommand = `${this.command.name}`
        if (this.argv.length !== 0) {
          genCommand = `${genCommand} ${this.argv.join(' ')}`
        }
        return genCommand
      }
    },
    methods: {
      /**
       * _retrieve and execute the appropriate command_
       */
      execute () {
        this.runCommand({
          command: this.generatedCommand
        })
      },

      handleClick () {
        this.execute()
      },

      ...mapActions('portfolio', [
        'runCommand'
      ])
    }
  }
</script>
