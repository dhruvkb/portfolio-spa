<template>
  <div class="ls">
    <ul v-if="isFound">
      <li
        v-for="(child, index) in node.children"
        :key="index">
        <Link :node="child"/>
      </li>
    </ul>
    <template v-else>
      <strong>{{ args[0] }}</strong> is not a valid directory.
    </template>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import Link from '@/components/Terminal/blocks/Link/Link'

  /**
   * This command lists the immediate contents of the current directory.
   */
  export default {
    name: 'List',
    components: {
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
    computed: {
      /**
       * _the directory whose contents are to be shown_
       */
      dir () {
        if (this.args.length === 0) {
          return this.currentNode
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

      ...mapState('terminal', [
        'currentNode'
      ]),
      ...mapGetters('terminal', [
        'nodeLocatedAt'
      ])
    },
    created () {
      this.node = this.dir
    }
  }
</script>

<style scoped lang="stylus" src="./List.styl">
</style>
