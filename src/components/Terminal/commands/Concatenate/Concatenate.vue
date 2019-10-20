<template>
  <div class="cat">
    <template v-if="isFound">
      <v-runtime-template v-if="contents" :template="contents"/>
      <Spinner v-else/>
    </template>

    <template v-else>
      <strong>{{ args.filename }}</strong> is not a valid file.
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faMapMarkerAlt,
    faBuilding,
    faCalendarDay,
    faServer
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import axios from 'axios'

  import VRuntimeTemplate from 'v-runtime-template'

  import Blockquote from '@/components/Blockquote/Blockquote'
  import Spinner from '@/components/Terminal/blocks/Spinner/Spinner'
  import Link from '@/components/Terminal/blocks/Link/Link'

  import Command from '@/mixins/command'

  library.add(
    faMapMarkerAlt,
    faBuilding,
    faCalendarDay,
    faServer
  )

  /**
   * This command prints the contents of a file 'filename'.
   */
  export default {
    name: 'Concatenate',
    mixins: [
      Command
    ],
    components: {
      VRuntimeTemplate,
      Spinner,

      // eslint-disable-next-line vue/no-unused-components
      FontAwesomeIcon,
      // eslint-disable-next-line vue/no-unused-components
      Link,
      // eslint-disable-next-line vue/no-unused-components
      Blockquote
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
       * _the directory to which the current directory should be changed_
       */
      file () {
        if (this.args.filename === 'VANITY') {
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
          (this.node && this.node.type === 'file')
      },
      /**
       * _the imported HTML of the file_
       */
      path () {
        let filePath
        if (this.args.filename === 'VANITY') {
          filePath = 'vanity_card.content.html'
        } else {
          let dirName = this.node.parent.name
          let fileName = this.node.name
          filePath = `${dirName}/${fileName}.content.html`
        }
        return require(`@/assets/content/${filePath}`)
      },

      ...mapGetters('terminal', [
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
          let path = this.path
          axios
            .get(path, {
              responseType: 'text'
            })
            .then(response => {
              setTimeout(() => {
                this.contents = response.data
                this.stopProcessing('PASS')
              }, 1000)
            })
            .catch(() => {
              this.stopProcessing('FAIL')
            })
        } catch (error) {
          this.stopProcessing('FAIL')
        }
      },

      ...mapMutations('terminal', [
        'setIsProcessing'
      ])
    },
    created () {
      this.node = this.file

      if (this.isFound) {
        this.loadContent()
      } else {
        this.stopProcessing('FAIL')
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Concatenate.styl">
</style>
