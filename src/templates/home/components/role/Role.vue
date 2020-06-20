<template>
  <div class="role" :class="roleClasses">
    <transition appear :name="transitionName" mode="out-in">
      <div :key="role">
        {{ $t(vowel) }}&nbsp;
        <span
          class="actual-role"
          :class="roleTextClasses">
          {{ $t(`roles.${role}`) }}
        </span>
      </div>
    </transition>
    <div
      class="fullstop"
      :class="roleTextClasses">
      .
    </div>
    <div
      class="arrow"
      :class="roleTextClasses">
      <FontAwesomeIcon
        :icon="['fas', 'arrow-right']"/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  library.add(faArrowRight)

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
      FontAwesomeIcon
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
          { ...this.focusableClasses }
        ]
      },
      /**
       * Get the classes to use on the role text.
       * @returns {Array} an array of all the classes to apply on the element
       */
      roleTextClasses () {
        return [
          ...this.coloredClasses
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
