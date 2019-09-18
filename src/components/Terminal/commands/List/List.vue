<template>
  <div class="ls">
    <ul>
      <li
        v-for="(child, index) in node.children"
        :key="index">
        <Link :node="child"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Link from '@/components/Terminal/blocks/Link/Link'

  /**
   * This command lists the immediate contents of the current directory.
   */
  export default {
    name: 'List',
    components: {
      Link
    },
    computed: {
      ...mapState('terminal', [
        'currentNode'
      ])
    },
    created () {
      // Get a non-reactive value of a state variable
      this.node = this.currentNode
    }
  }
</script>

<style scoped lang="stylus" src="./List.styl">
</style>
