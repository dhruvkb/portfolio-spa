<template>
  <span class="clear">&nbsp;</span>
</template>

<script>
  import { mapMutations } from 'vuex'

  /**
   * This command clears the terminal, while preserving all command history.
   */
  export default {
    name: 'Clear',
    methods: {
      ...mapMutations('portfolio', [
        'clearOutput'
      ])
    },
    created () {
      this.clearOutput()
    }
  }
</script>
