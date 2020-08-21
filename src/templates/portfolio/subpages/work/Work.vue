<template>
  <main>
    <Vim
      v-if="node"
      :key="slug"
      :node="node"/>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Vim from '@/components/portfolio/vim/Vim'

  /**
   * This is one work experience.
   */
  export default {
    name: 'Work',
    components: {
      Vim
    },
    props: {
      /**
       * _the slug of the work to display_
       */
      slug: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        node: null
      }
    },
    computed: {
      ...mapGetters('portfolio', [
        'nodeNamed'
      ])
    },
    watch: {
      /**
       * Reload the page and the post content when the slug changes.
       * @param {string} to - the new value of the slug
       * @param {string} from - the old value of the slug
       */
      '$route.params.slug': function (to, from) {
        if (to !== from) { // No need to reload if nothing changes
          // Bring back the loading indicator
          this.node = null
          // Fetch new content from the file system tree
          this.loadContent()
        }
      }
    },
    methods: {
      /**
       * Get the node with the name matching the slug. This corresponds to an
       * HTML file stored as an asset and bundled with the application using
       * the Webpack file-loader.
       */
      loadContent () {
        document.title = 'Dhruv Bhanushali - Portfolio work'

        const node = this.nodeNamed(this.slug)
        if (node) {
          document.title = document.title.replace('Portfolio work', node.name)
          this.node = node
        } else {
          this.$router.push({
            name: 'portfolio'
          }).catch(err => {
            if (err.name === 'NavigationDuplicated') {
              // Do nothing
            }
          })
        }
      }
    },
    mounted () {
      this.loadContent()
    }
  }
</script>

<style scoped lang="scss" src="./Work.scss"/>
