<template>
  <span
    v-if="isFound"
    class="cd">
    &nbsp;
  </span>

  <div
    v-else
    class="cd">
    <strong>{{ args.dirname }}</strong> is not a valid directory.
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import argumented from '@/mixins/argumented'

  /**
   * This command switches to a given directory 'dirname'.
   */
  export default {
    name: 'ChangeDirectory',
    mixins: [
      argumented
    ],
    argSpec: {
      args: [
        {
          name: 'dirname',
          type: String,
          default: '~'
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
    computed: {
      /**
       * _the directory to which the current directory should be changed_
       */
      dir () {
        return this.nodeLocatedAt(this.args.dirname.replace(/\/$/, ''))
      },
      /**
       * _whether a folder matching the path was found_
       */
      isFound () {
        return this.node && this.node.isFolder()
      },

      ...mapGetters('portfolio', [
        'nodeLocatedAt',
        'absolutePathTo'
      ])
    },
    methods: {
      ...mapMutations('portfolio', [
        'setCurrentNode'
      ])
    },
    created () {
      this.node = this.dir

      if (this.isFound) {
        this.setCurrentNode({
          currentNode: this.node
        })
      }
    }
  }
</script>
