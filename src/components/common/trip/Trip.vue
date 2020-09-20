<template>
  <div
    v-shortkey="shortkeyConfig"
    class="trip"
    :class="tripClasses"
    @shortkey="handleShortkey">
    <div
      class="track"
      :style="trackStyles">
      <button
        v-for="(option, index) in options"
        :key="index"
        class="option"
        :class="optionClasses(index)"
        :title="optionTitle(option.title, index)"
        @click="handleClick(index)">
        <!-- @slot Option content goes here -->
        <slot :name="option.name">&nbsp;</slot>
      </button>
    </div>
  </div>
</template>

<script>
  import colored from '@/mixins/colored'

  /**
   * This component renders a trip switch, which is like a flip switch with more
   * than 2 states.
   */
  export default {
    name: 'Trip',
    mixins: [
      colored
    ],
    model: {
      prop: 'choice',
      event: 'trip'
    },
    props: {
      /**
       * _the keyboard shortcut for the switch to move_
       */
      shortkey: {
        type: Array,
        required: true
      },
      /**
       * _the list of options offered as choices_
       */
      options: {
        type: Array,
        required: true
      },
      /**
       * _the position of the switch out of the given options_
       */
      choice: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Get the classes to use on the trip switch.
       * @returns {Array} an array of all the classes to apply on the element
       */
      tripClasses () {
        return [
          ...this.coloredClasses
        ]
      },
      /**
       * Get the classes to use on the buttons track.
       * @returns {Array} an array of all the classes to apply on the element
       */
      trackStyles () {
        return {
          '--position': this.position
        }
      },

      /**
       * Get the extended shortkey configuration. The extended configuration
       * uses the given shortkey for forward traversal and a Shift modifier for
       * the backward traversal.
       * @returns {Object} the forward and backward shortkey combinations
       */
      shortkeyConfig () {
        return {
          forward: this.shortkey,
          backward: [...this.shortkey, 'shift']
        }
      },

      /**
       * Get the current position of the trip switch.
       * @returns {number} the position at which the switch presently is
       */
      position () {
        return this.options.map(option => option.name).indexOf(this.choice)
      },
      /**
       * Get the next position of the trip switch, which it will move to if and
       * when it is triggered by the shortkey.
       * @returns {number} the next position to which the switch will go
       */
      nextPosition () {
        return this.$modulo(this.position + 1, this.options.length)
      },
      /**
       * Get the next position of the trip switch, which it will move to if and
       * when it is triggered by the shortkey.
       * @returns {number} the next position to which the switch will go
       */
      prevPosition () {
        return this.$modulo(this.position - 1, this.options.length)
      }
    },
    methods: {
      /**
       * Get the classes to use on the option button.
       * @param {number} index - the index of the option
       * @returns {Array} an array of all the classes to apply on the element
       */
      optionClasses (index) {
        return [
          {
            active: index === this.position
          }
        ]
      },
      /**
       * Get the tooltip title to display on the option button.
       * @param {string} title - the given title for the option
       * @param {number} index - the index of the option
       * @returns {String} the title prefixed with the shortkey combination
       */
      optionTitle (title, index) {
        switch (index) {
          case this.nextPosition:
            return `[T] ${title}`
          case this.prevPosition:
            return `[Shift + T] ${title}`
          default:
            return title
        }
      },

      /**
       * Emit a 'trip' event when the switch is shifted by either clicking or
       * pressing the shortcut key combination.
       * @param {number} index - the index to which the trip should go
       */
      emitTrip (index) {
        const option = this.options.map(option => option.name)[index]
        this.$emit('trip', option)
      },

      handleClick (index) {
        this.emitTrip(index)
      },
      handleShortkey (event) {
        switch (event.srcKey) {
          case 'forward':
            this.emitTrip(this.nextPosition)
            break
          case 'backward':
            this.emitTrip(this.prevPosition)
            break
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Trip.scss"/>
