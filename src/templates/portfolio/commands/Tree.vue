<template>
  <div class="tree">
    <template v-if="isFound">
      <template v-if="!args.flatten">
        <span
          :class="rule ? 'extra-space' : 'space'"
          v-for="(rule, index) in lineRules"
          :key="index">{{ rule ? '': '│'}}</span>{{ isLastChild ? '└' : '├'}}──&nbsp;
      </template>

      <template v-if="!(args.flatten && node.isFolder())">
        <template v-if="args.flatten">─&nbsp;</template>
        <Link :node="node"/>
      </template>

      <tree
        v-for="child in node.children"
        :argv="argv"
        :passed-node="child"
        :line-rules="[...lineRules, isLastChild]"
        :key="child.name"/>
    </template>
    <template v-else>
      <strong>{{ args.dirname }}</strong> is not a valid directory.
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import Link from '@/components/portfolio/link/Link'

  import argumented from '@/mixins/argumented'

  /**
   * This command recursively lists all directories and their contents.
   */
  export default {
    name: 'Tree',
    mixins: [
      argumented
    ],
    components: {
      Link
    },
    argSpec: {
      args: [
        {
          name: 'dirname',
          type: String,
          default: '.'
        }
      ],
      kwargs: [
        {
          name: '--flatten',
          type: Boolean,
          aliases: [
            '-f'
          ]
        }
      ]
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      argv: {
        type: Array
      },
      /**
       * _the node below which the tree is to be rendered_
       */
      passedNode: {
        type: Object
      },
      /**
       * _the rules to draw lines before every element of this tree_
       */
      lineRules: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      level () {
        return this.lineRules.length
      },
      /**
       * _the directory whose contents are to be shown_
       */
      dir () {
        if (this.passedNode) {
          return this.passedNode
        } else {
          return this.nodeLocatedAt(this.args.dirname.replace(/\/$/, ''))
        }
      },
      /**
       * _whether a node matching the path was found_
       */
      isFound () {
        return this.node
      },
      /**
       * _whether this node is the last child of its parent_
       */
      isLastChild () {
        if (this.level === 0) { // Root node
          return true
        } else {
          const siblings = this.node.parent.children
          return siblings.indexOf(this.node) === siblings.length - 1
        }
      },

      ...mapState('portfolio', [
        'currentNode'
      ]),
      ...mapGetters('portfolio', [
        'nodeLocatedAt'
      ])
    },
    created () {
      this.node = this.dir
    }
  }
</script>

<style scoped lang="scss">
  .tree {
    .space {
      margin-right: 3ch;
    }

    .extra-space {
      margin-right: 4ch;
    }
  }
</style>
