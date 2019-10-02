<template>
  <span
    v-if="isFound"
    class="cd">
    &nbsp;
  </span>

  <div
    v-else
    class="cd">
    <strong>{{ args[0] }}</strong> is not a valid directory.
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  /**
   * This command switches to a given directory 'dirname'.
   */
  export default {
    name: 'ChangeDirectory',
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
       * _the directory to which the current directory should be changed_
       */
      dir () {
        if (this.args.length === 0) {
          return this.nodeLocatedAt('~')
        } else {
          return this.nodeLocatedAt(this.args[0].replace(/\/$/, ''))
        }
      },
      /**
       * _whether a folder matching the path was found_
       */
      isFound () {
        return this.node && this.node.type === 'folder'
      },

      ...mapGetters('terminal', [
        'nodeLocatedAt',
        'absolutePathTo'
      ])
    },
    methods: {
      ...mapMutations('terminal', [
        'setCurrentNode'
      ])
    },
    created () {
      this.node = this.dir

      if (this.node) {
        this.setCurrentNode({
          currentNode: this.node
        })
        this.$router.push({
          name: 'portfolio',
          params: {
            dir: this.absolutePathTo(this.node).substring(2)
          }
        }).catch(err => {
          if (err.name === 'NavigationDuplicated') {
            // Do nothing
          }
        })
      }
    }
  }
</script>
