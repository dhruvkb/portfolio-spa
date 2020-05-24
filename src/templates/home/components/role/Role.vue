<template>
  <div class="role">
    <transition appear name="flip-vertical" mode="out-in">
      <div :key="role">
        {{ $t(vowel) }}&nbsp;
        <span
          class="actual-role"
          :class="roleTextClasses">{{ $t(`roles.${role}`) }}</span>
      </div>
    </transition>
    <div
      class="fullstop"
      :class="roleTextClasses">
      {{ $t('fullstop') }}
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

  library.add(faArrowRight)

  /**
   * This component displays my role in various colours.
   */
  export default {
    name: 'Role',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon
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
    }
  }
</script>

<style scoped lang="scss" src="./Role.scss">
</style>

<i18n src="./lang.json">
</i18n>
