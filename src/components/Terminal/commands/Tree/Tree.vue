<template>
  <div class="tree">
    <span
      v-for="index in level"
      :key="index">
      <!-- TODO Generalise this algorithm to work on more than two levels -->
      <template v-if="index === level">
        {{ isLastChild ? '└' : '├'}}──
      </template>
      <template v-else>
        {{ isParentLastChild ? '&nbsp;': '│'}}&nbsp;&nbsp;
      </template>
    </span>

    <Link :node="computedNode"/>

    <tree
      v-for="child in computedNode.children"
      :node="child"
      :level="level + 1"
      :key="child.name"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Link from '@/components/Terminal/blocks/Link/Link'

  /**
   * This command recursively lists all directories and their contents.
   */
  export default {
    name: 'Tree',
    components: {
      Link
    },
    props: {
      /**
       * _the node below which the tree is to be rendered_
       */
      node: {
        type: Object
      },
      /**
       * _the current depth of the tree_
       */
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      /**
       * _the node passed to the component, falling back to the root node_
       */
      computedNode () {
        return this.node || this.tree.root
      },
      /**
       * _whether this node is the last child of its parent_
       */
      isLastChild () {
        let siblings = this.computedNode.parent.children
        return siblings.indexOf(this.computedNode) === siblings.length - 1
      },
      /**
       * _whether the parent of this node is the last child of its parent_
       */
      isParentLastChild () {
        let parent = this.computedNode.parent
        let parentSiblings = parent.parent.children
        return parentSiblings.indexOf(parent) === parentSiblings.length - 1
      },

      ...mapState('terminal', [
        'tree'
      ])
    }
  }
</script>
