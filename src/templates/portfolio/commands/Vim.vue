<template>
  <span
    v-if="isFound"
    class="vim">
    &nbsp;
  </span>

  <div
    v-else
    class="vim">
    <strong>{{ args.filename }}</strong> is not a valid file.
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  import argumented from '@/mixins/argumented'

  /**
   * This command opens the specified file 'filename' in a view of its own.
   */
  export default {
    name: 'Vim',
    mixins: [
      argumented
    ],
    argSpec: {
      args: [
        {
          name: 'filename',
          type: String,
          required: true
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
       * _the file whose contents must be displayed_
       */
      file () {
        return this.nodeLocatedAt(this.args.filename)
      },
      /**
       * _whether a file matching the path was found_
       */
      isFound () {
        return this.node && this.node.isFile()
      },
      /**
       * _the imported HTML of the file_
       */
      path () {
        const dirName = this.node.parent.name
        const fileName = this.node.name
        const filePath = `${dirName}/${fileName}.content.html`

        return require(`@/assets/content/${filePath}`)
      },

      ...mapGetters('portfolio', [
        'nodeLocatedAt'
      ])
    },
    methods: {
      ...mapMutations('portfolio', [
        'clearSelectOutput'
      ])
    },
    created () {
      this.node = this.file
    },
    mounted () {
      if (this.isFound) {
        this.clearSelectOutput({
          deletedComponents: ['Vim']
        }) // Prevents redirect when going back

        this.$router.push({
          name: 'work',
          params: {
            slug: this.node.name
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
