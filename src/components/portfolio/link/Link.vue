<template>
  <span class="link" :class="linkClasses">
    <a
      href="#"
      :title="description"
      @click.prevent="handleClick">
      <template v-if="as">
        <span :title="node.name">{{ as }}</span>
      </template>
      <template v-else>
        <Icon
          v-if="node.icon"
          :icon="node.icon"
          :path="icons[node.icon]"
          is-inline/>
        {{ node.name }}
      </template>
    </a>
  </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import Icon from '@/components/common/icon/Icon'

  import briefcase from '@/assets/icons/briefcase.svg'
  import cube from '@/assets/icons/cube.svg'
  import flash from '@/assets/icons/flash.svg'
  import git from '@/assets/icons/git.svg'
  import document from '@/assets/icons/document.svg'

  /**
   * This block represents a link to a node in the file system, be it a folder
   * or a file, which can be clicked to either enter or open it respectively.
   */
  export default {
    name: 'Link',
    components: {
      Icon
    },
    data () {
      return {
        icons: {
          briefcase,
          cube,
          flash,
          git,
          document
        }
      }
    },
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
        if (this.node.isFolder()) {
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
        if (this.node.isFolder()) {
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
        if (this.node.isFolder()) {
          command = 'cd'
        } else { // this.node.type === nodeType.FILE
          command = 'cat'
        }
        this.runCommand({
          command: `${command} ${this.absolutePathTo(this.node)}`
        })
      },

      handleClick () {
        this.execute()
      },

      ...mapActions('portfolio', [
        'runCommand'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./Link.scss"/>
