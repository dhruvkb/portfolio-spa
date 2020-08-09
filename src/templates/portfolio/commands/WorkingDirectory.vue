<template>
  <div class="pwd">
    <span class="violet-colored">{{ pwd }}</span>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

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

      ...mapState('portfolio', [
        'currentNode'
      ]),
      ...mapGetters('portfolio', [
        'absolutePathTo'
      ])
    },
    created () {
      // Get a non-reactive value of a state variable
      this.node = this.currentNode
    }
  }
</script>
