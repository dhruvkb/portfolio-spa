<template>
  <div class="cat">
    <template v-if="isFound">
      <!-- TODO Render file contents -->
      // Contents
    </template>

    <template v-else>
      <strong>{{ args[0] }}</strong> is not a valid file.
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  /**
   * This command prints the contents of a file 'filename'.
   */
  export default {
    name: 'Concatenate',
    props: {
      /**
       * _the arguments passed to the command_
       */
      args: {
        type: Array,
        required: true
      }
    },
    computed: {
      /**
       * _the path to the file which should be opened_
       */
      filename () {
        return this.args[0]
      },
      /**
       * _whether a file matching the path was found_
       */
      isFound () {
        return this.node && this.node.type === 'file'
      },

      ...mapGetters('terminal', [
        'nodeLocatedAt'
      ])
    },
    created () {
      this.node = this.nodeLocatedAt(this.filename)

      if (this.node) {
        console.log(this.node)
      }
    }
  }
</script>
