<template>
  <div class="tree">
    <template v-if="isFound">
      <template v-if="!args.flatten">
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
      </template>

      <template v-if="!(args.flatten && node.type === 'folder')">
        <template v-if="args.flatten">─ </template>
        <Link :node="node"/>
      </template>

      <tree
        v-for="child in node.children"
        :argv="argv"
        :passed-node="child"
        :level="level + 1"
        :key="child.name"/>
    </template>
    <template v-else>
      <strong>{{ args.dirname }}</strong> is not a valid directory.
    </template>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import Link from '@/components/Terminal/blocks/Link/Link'

  import Command from '@/mixins/command'

  /**
   * This command recursively lists all directories and their contents.
   */
  export default {
    name: 'Tree',
    mixins: [
      Command
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
       * _the current depth of the tree_
       */
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
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
        let siblings = this.node.parent.children
        return siblings.indexOf(this.node) === siblings.length - 1
      },
      /**
       * _whether the parent of this node is the last child of its parent_
       */
      isParentLastChild () {
        let parent = this.node.parent
        let parentSiblings = parent.parent.children
        return parentSiblings.indexOf(parent) === parentSiblings.length - 1
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
