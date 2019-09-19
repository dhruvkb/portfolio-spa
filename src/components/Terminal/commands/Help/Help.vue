<template>
  <div class="help">
    <template v-if="isKeyboardMode">
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
      These commands are supported. Hover over them for more info.
      <ul class="command-list">
        <li
          v-for="(value, key, index) in filteredMapping"
          :key="index">
          <span
            class="green-colored"
            :title="value.description">
            <strong>{{ key }}</strong>

            <span
              v-if="'args' in value"
              class="blue-colored">
              {{ value.args }}
            </span>
          </span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  import { mapping } from '@/components/Terminal/commands'

  /**
   * This command gives some help with using the CLI.
   */
  export default {
    name: 'Help',
    props: {
      /**
       * _the arguments passed to the command_
       */
      args: {
        type: Array
      }
    },
    computed: {
      /**
       * _whether help pertaining to the use of the keyboard was requested_
       */
      isKeyboardMode () {
        return this.args && this.args.includes('--keyboard')
      },
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
    }
  }
</script>

<style scoped lang="stylus" src="./Help.styl">
</style>
