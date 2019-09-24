<template>
  <span :class="linkClasses">
    <a
      href="#"
      :title="description"
      @click.prevent="execute">
      <template>{{ node.name }}</template>
    </a>
  </span>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

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
      }
    },
    computed: {
      /**
       * _the classes to apply to the link_
       */
      linkClasses () {
        let classes = []
        if (this.node.type === 'folder') {
          classes.push('violet-colored')
        } else {
          classes.push('magenta-colored')
        }
        return classes
      },
      /**
       * _a helpful hint to show when the link is hovered_
       */
      description () {
        return this.node.type === 'folder'
          ? `Enter folder '${this.node.name}'.`
          : `Open file '${this.node.name}'.`
      },

      ...mapGetters('terminal', [
        'absolutePathTo'
      ])
    },
    methods: {
      /**
       * _retrieve and execute the appropriate command_
       */
      execute () {
        let command
        if (this.node.type === 'folder') {
          command = 'cd'
        } else {
          command = 'cat'
        }
        this.runCommand({
          command: `${command} ${this.absolutePathTo(this.node)}`
        })
      },

      ...mapActions('terminal', [
        'runCommand'
      ])
    }
  }
</script>
