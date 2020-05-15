<template>
  <div class="help">

    <template v-if="!args.cmdname">
      These commands are supported. Hover over them for more info.
      <ul class="command-list">
        <li
          v-for="(command, cmdName, index) in filteredMapping"
          :key="index">
          <span
            v-html="commandSyntax(command)"
            :title="command.description">
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
        <template v-if="command">
          {{ command.name }}
          <p>
            SYNOPSIS:<br/>
            &nbsp;&nbsp;<span v-html="commandSyntax(command)"></span>
          </p>
          <p>
            DESCRIPTION:<br/>
            &nbsp;&nbsp;{{ command.description }}
          </p>
        </template>
        <template v-else>
          <BadCommand :argv="[args.cmdname]"/>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
  import { mapping } from '@/templates/Portfolio/commands'

  import Argumented from '@/mixins/argumented'

  import BadCommand from '@/templates/Portfolio/commands/BadCommand/BadCommand'

  /**
   * This command gives some help with using the CLI.
   */
  export default {
    name: 'Help',
    mixins: [
      Argumented
    ],
    components: {
      BadCommand
    },
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
        return Object.fromEntries(
          Object.entries(mapping).filter(([, command]) => !command.isHidden)
        )
      },
      command () {
        if (this.args.cmdname in mapping) {
          return mapping[this.args.cmdname]
        } else {
          return false
        }
      }
    },
    methods: {
      commandSyntax (command) {
        let rep

        let { name } = command
        rep = `<span class="green-colored"><strong>${name}</strong></span>`

        if ('args' in command) {
          ['kwargs', 'args'].forEach(type => {
            command.args[type].forEach(arg => {
              let argRep = `${arg.name}`
              if ('aliases' in arg) {
                arg.aliases.forEach(alias => {
                  argRep = `${argRep}/${alias}`
                })
              }

              // Make optional arguments boxed
              if (arg.required !== true) {
                argRep = `[${argRep}]`
              }

              rep = `${rep} <span class="blue-colored">${argRep}</span>`
            })
          })
        }

        return rep
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Help.styl">
</style>
