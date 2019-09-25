<template>
  <div class="cat">
    <template v-if="isFound">
      <v-runtime-template v-if="contents" :template="contents"/>
      <Spinner v-else/>
    </template>

    <template v-else>
      <strong>{{ args[0] }}</strong> is not a valid file.
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

  import VRuntimeTemplate from 'v-runtime-template'

  import Spinner from '@/components/Terminal/blocks/Spinner/Spinner'
  import Link from '@/components/Terminal/blocks/Link/Link'

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
    components: {
      VRuntimeTemplate,
      Spinner,

      // eslint-disable-next-line vue/no-unused-components
      FontAwesomeIcon,
      // eslint-disable-next-line vue/no-unused-components
      Link
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      args: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        contents: null
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
      /**
       * _the imported HTML of the file_
       */
      path () {
        let dirName = this.node.parent.name
        let fileName = this.node.name
        return require(`@/assets/content/${dirName}/${fileName}.content.html`)
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
          fetch(path)
            .then(stream => stream.text())
            .then(data => {
              setTimeout(() => {
                this.contents = data
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
      this.node = this.nodeLocatedAt(this.filename)

      if (this.node) {
        setTimeout(this.loadContent, 0)
      } else {
        this.stopProcessing('FAIL')
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Concatenate.styl">
</style>
