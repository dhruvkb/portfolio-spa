<template>
  <div class="past">
    <template v-for="(interaction, index) in visibleInteractions">
      <div
        class="interaction"
        :key="index">
        <Prompt :directory="interaction.context.directory"/>
        <template>{{ interaction.input.command }}</template>
        <component
          class="output"
          :is="interaction.output.component"
          :argv="interaction.output.argv"/>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Prompt from '../prompt/Prompt'

  import { components } from '@/templates/portfolio/commands'

  /**
   * This component represents the past of the terminal, displaying all the
   * interactions the user has had with the terminal leading upto the present.
   */
  export default {
    name: 'Past',
    components: {
      Prompt,

      // Components representing commands
      ...components
    },
    computed: {
      visibleInteractions () {
        return this.interactionHistory.filter(
          interaction => interaction.isVisible
        )
      },

      ...mapState('portfolio', [
        'interactionHistory'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./Past.scss"/>
