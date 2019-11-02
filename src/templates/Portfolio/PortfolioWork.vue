<template>
  <main>
    <Vim v-if="node" :node="node"/>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Vim from '@/templates/Portfolio/components/Vim/Vim'

  export default {
    name: 'PortfolioWork',
    components: {
      Vim
    },
    props: {
      /**
       * _the name of the work to display_
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
    mounted () {
      this.node = this.nodeNamed(this.slug)
      if (!this.node) {
        this.$router.push({
          name: 'portfolio'
        }).catch(err => {
          if (err.name === 'NavigationDuplicated') {
            // Do nothing
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" src="./PortfolioWork.styl">
</style>
