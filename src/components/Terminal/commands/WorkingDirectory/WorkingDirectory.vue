<template>
  <div class="pwd violet-colored">
    {{ pwd }}
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  /**
   * This command reminds the currently open directory.
   */
  export default {
    name: 'WorkingDirectory',
    computed: {
      /**
       * _the absolute path to the current working directory_
       */
      pwd () {
        return this.absolutePathTo(this.node)
      },

      ...mapState('terminal', [
        'currentNode'
      ]),
      ...mapGetters('terminal', [
        'absolutePathTo'
      ])
    },
    created () {
      // Get a non-reactive value of a state variable
      this.node = this.currentNode
    }
  }
</script>
