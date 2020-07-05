<template>
  <span :class="linkClasses">
    <a
      href="#"
      :title="description"
      @click.prevent="execute">
      <template v-if="as">
        <span :title="node.name">{{ as }}</span>
      </template>
      <template v-else>{{ node.name }}</template>
    </a>
  </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import { nodeType } from '@/templates/portfolio/data/tree'

  /**
   * This block represents a link to a node in the file system, be it a folder
   * or a file, which can be clicked to either enter or open it respectively.
   */
  export default {
    name: 'Link',
    props: {
      /**
       * _the node to generate the link for_
       */
      node: {
        type: Object,
        required: true
      },
      /**
       * _alternate text to display in place of the node name_
       */
      as: {
        type: String
      }
    },
    computed: {
      /**
       * _the classes to apply to the link_
       */
      linkClasses () {
        const classes = []
        if (this.node.type === nodeType.FOLDER) {
          classes.push('violet-colored')
        } else { // this.node.type === nodeType.FILE
          classes.push('magenta-colored')
        }
        return classes
      },
      /**
       * _a helpful hint to show when the link is hovered_
       */
      description () {
        if (this.node.type === nodeType.FOLDER) {
          return `Enter folder '${this.node.name}'.`
        } else { // this.node.type === nodeType.FILE
          return `Open file '${this.node.name}'.`
        }
      },

      ...mapGetters('portfolio', [
        'absolutePathTo'
      ])
    },
    methods: {
      /**
       * _retrieve and execute the appropriate command_
       */
      execute () {
        let command
        if (this.node.type === nodeType.FOLDER) {
          command = 'cd'
        } else { // this.node.type === nodeType.FILE
          command = 'cat'
        }
        this.runCommand({
          command: `${command} ${this.absolutePathTo(this.node)}`
        })
      },

      ...mapActions('portfolio', [
        'runCommand'
      ])
    }
  }
</script>
