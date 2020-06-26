<template>
  <div class="role" :class="roleClasses">
    <transition appear :name="transitionName" mode="out-in">
      <ArrowControl
        :key="role"
        :is-focused="isFocused">
        <template #default>
          <div>
            <span class="vowel">
              {{ $t(vowel) }}
            </span>
            <span class="actual-role">
              {{ $t(`roles.${role}`) }}
            </span>
          </div>
        </template>
        <template #punctuation><span :key="role">.</span></template>
      </ArrowControl>
    </transition>
  </div>
</template>

<script>
  import ArrowControl from '@/components/arrowcontrol/ArrowControl'

  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  /**
   * This component iterates over my roles.
   */
  export default {
    name: 'Role',
    mixins: [
      colored,
      focusable
    ],
    components: {
      ArrowControl
    },
    data () {
      return {
        transitionName: 'flip-vertical'
      }
    },
    props: {
      /**
       * _the index of the role being listed down_
       */
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      /**
       * Get the classes to use on the role ticker.
       * @returns {Array} an array of all the classes to apply on the element
       */
      roleClasses () {
        return [
          ...this.coloredClasses,
          {
            ...this.focusableClasses
          }
        ]
      },

      /**
       * Get the role at the index specified by the prop.
       * @returns {string} the underscored role
       */
      role () {
        return this.$getRole(this.index)
      },
      /**
       * Get the vowel for the currently displayed role.
       * @returns {string} 'an' if the role starts with a vowel, 'a' otherwise
       */
      vowel () {
        return ['a', 'e', 'i', 'o', 'u'].includes(this.role.charAt(0))
          ? 'an'
          : 'a'
      }
    },
    watch: {
      /**
       * Determine the transition name based on whether the animation is going
       * in the forward or backward direction.
       * @param {string} to - the new value of the index
       * @param {string} from - the old value of the index
       */
      index (to, from) {
        if (to > from) { // Animation is moving forward
          this.transitionName = 'flip-vertical'
        } else { // Animation is moving backward
          this.transitionName = 'flip-vertical-rev'
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Role.scss">
</style>

<i18n src="./lang.json">
</i18n>
