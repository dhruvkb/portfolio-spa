<template>
  <div class="ls">
    <ul v-if="isFound">
      <template v-if="args.all">
        <li>
          <Link :node="node" as="."/>
        </li>
        <li>
          <Link :node="node.parent" as=".."/>
        </li>
      </template>
      <li
        v-for="(child, index) in node.children"
        :key="index">
        <Link :node="child"/>
      </li>
    </ul>

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
   * This command lists the immediate contents of the current directory.
   */
  export default {
    name: 'List',
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
          name: '--all',
          type: Boolean,
          aliases: [
            '-a'
          ]
        }
      ]
    },
    props: {
      /**
       * _the arguments passed to the command_
       */
      argv: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      /**
       * _the directory whose contents are to be shown_
       */
      dir () {
        return this.nodeLocatedAt(this.args.dirname.replace(/\/$/, ''))
      },
      /**
       * _whether a folder matching the path was found_
       */
      isFound () {
        return this.node && this.node.isFolder()
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
  @use '~@/styles/tokens/devices';

  @use '~@/styles/utils/media';

  .ls {
    ul {
      list-style: none;

      padding-left: 0;

      margin: 0;

      @include media.device-specific(devices.$group-non-phone) {
        columns: 2;
      }
    }
  }
</style>
