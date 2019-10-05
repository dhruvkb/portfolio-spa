<template>
  <div class="help">

    <template v-if="!args.cmdname">
      These commands are supported. Hover over them for more info.
      <ul class="command-list">
        <li
          v-for="(value, key, index) in filteredMapping"
          :key="index">
          <span
            class="green-colored"
            :title="value.description">
            <strong>{{ key }}</strong>

            <span class="blue-colored">
              {{ argsRepresentation(value) }}
            </span>
          </span>
        </li>
      </ul>
    </template>
    <template v-else>
      <template v-if="args.cmdname === 'keyboard'">
        <ul>
          <li>
            Cycle through terminal history using
            <span class="cyan-colored">&uarr;</span> &
            <span class="cyan-colored">&darr;</span>.
          </li>

          <li>
            Autocomplete command using
            <span class="cyan-colored" title="Tab">Tab</span>.
          </li>

          <li>
            Abort command using
            <span class="cyan-colored" title="Tab">Ctrl</span> +
            <span class="cyan-colored" title="Tab">C</span>.
          </li>
        </ul>
        Use the mouse if you're not CLI-savvy.
      </template>
      <template v-else>
        {{ args.cmdname }}
      </template>
    </template>
  </div>
</template>

<script>
  import { mapping } from '@/components/Terminal/commands'

  import Command from '@/mixins/command'

  /**
   * This command gives some help with using the CLI.
   */
  export default {
    name: 'Help',
    mixins: [
      Command
    ],
    argSpec: {
      args: [
        {
          name: 'cmdname',
          type: String
        }
      ],
      kwargs: []
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
       * _the mapping object excluding commands that chose to be hidden_
       */
      filteredMapping () {
        let filteredMapping = {}
        Object.keys(mapping).forEach(key => {
          if (!mapping[key].isHidden) {
            filteredMapping[key] = mapping[key]
          }
        })
        return filteredMapping
      }
    },
    methods: {
      argsRepresentation (value) {
        let representation = ''
        if ('args' in value) {
          ['kwargs', 'args'].forEach(type => {
            value.args[type].forEach(arg => {
              let argRepresentation = `${arg.name}`
              if ('aliases' in arg) {
                arg.aliases.forEach(alias => {
                  argRepresentation = `${argRepresentation}/${alias}`
                })
              }

              // Make optional arguments boxed
              if (arg.required !== true) {
                argRepresentation = `[${argRepresentation}]`
              }

              representation = `${representation} ${argRepresentation}`
            })
          })
        }
        return representation
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Help.styl">
</style>
