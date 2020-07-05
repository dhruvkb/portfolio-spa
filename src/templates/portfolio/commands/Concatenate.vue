<template>
  <div class="cat">
    <template v-if="isFound">
      <div v-if="contents" v-html="contents"></div>
      <Spinner v-else/>
    </template>

    <template v-else>
      <strong>{{ args.filename }}</strong> is not a valid file.
    </template>
  </div>
</template>

<script>
  import axios from 'axios'
  import prism from 'prismjs'

  import { mapGetters, mapMutations } from 'vuex'

  import { Portfolio } from '@/templates/portfolio/Portfolio'

  import argumented from '@/mixins/argumented'

  import { nodeType } from '@/templates/portfolio/data/tree'

  import '@/styles/utils/prism.scss'

  /**
   * This command prints the contents of a file 'filename'.
   */
  export default {
    name: 'Concatenate',
    mixins: [
      argumented
    ],
    components: {
      Spinner: Portfolio.Spinner,
      // eslint-disable-next-line vue/no-unused-components
      Link: Portfolio.Link
    },
    argSpec: {
      args: [
        {
          name: 'filename',
          type: String,
          default: 'VANITY'
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
    data () {
      return {
        contents: null
      }
    },
    computed: {
      /**
       * _the file whose contents must be displayed_
       */
      file () {
        if (this.args.filename === 'VANITY' || this.args.filename === 'E') {
          return null
        } else {
          return this.nodeLocatedAt(this.args.filename)
        }
      },
      /**
       * _whether a file matching the path was found_
       */
      isFound () {
        return this.args.filename === 'VANITY' ||
          this.args.filename === 'E' ||
          (this.node && this.node.type === nodeType.FILE)
      },
      /**
       * _the imported HTML of the file_
       */
      path () {
        let filePath
        if (this.args.filename === 'VANITY') {
          filePath = 'vanity_card.content.html'
        } else if (this.args.filename === 'E') {
          filePath = 'e.content.html'
        } else {
          const dirName = this.node.parent.name
          const fileName = this.node.name
          filePath = `${dirName}/${fileName}.content.html`
        }
        return require(`@/assets/content/${filePath}`)
      },

      ...mapGetters('portfolio', [
        'nodeLocatedAt'
      ])
    },
    methods: {
      stopProcessing (state) {
        if (state === 'FAIL') {
          this.contents = '<div>An unexpected error occurred.</div>'
        }
        this.setIsProcessing({
          isProcessing: false
        })
      },
      loadContent () {
        try {
          const path = this.path
          axios
            .get(path, {
              responseType: 'text'
            })
            .then(response => {
              setTimeout(() => {
                this.contents = response.data

                this.$nextTick(this.formatOutput)
              }, 1000)
            })
            .catch(() => {
              this.stopProcessing('FAIL')
            })
        } catch (error) {
          this.stopProcessing('FAIL')
        }
      },
      formatOutput () {
        prism.highlightAll()
        this.stopProcessing('PASS')
      },

      ...mapMutations('portfolio', [
        'setIsProcessing'
      ])
    },
    created () {
      this.node = this.file
    },
    mounted () {
      if (this.isFound) {
        this.loadContent()
      } else {
        this.stopProcessing('FAIL')
      }
    }
  }
</script>
