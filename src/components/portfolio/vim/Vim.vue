<template>
  <div class="vim">
    <Concatenate :argv="[absolutePathTo(node)]"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Concatenate from '@/templates/portfolio/commands/Concatenate'

  /**
   * This is the Vim component, the showcase for the work in my portfolio
   */
  export default {
    name: 'Vim',
    components: {
      Concatenate
    },
    props: {
      /**
       * _the name of the file to open in the terminal_
       */
      node: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters('portfolio', [
        'absolutePathTo'
      ])
    }
  }
</script>
