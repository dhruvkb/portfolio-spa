<template>
  <div class="role">
    <transition appear name="flip-vertical" mode="out-in">
      <div :key="role">
        <span class="secondary-colored">{{ $t(vowel) }}</span>&nbsp;
        <span :class="roleClasses">{{ $t(`roles.${role}`) }}{{ $t('fullstop') }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  import Colored from '@/mixins/colored'

  /**
   * This component displays my role in various colours.
   */
  export default {
    name: 'Role',
    mixins: [
      Colored
    ],
    props: {
      /**
       * _the role being depicted by the memoji_
       */
      role: {
        type: String,
        default: 'technical writer'
      }
    },
    computed: {
      /**
       * _the classes to use on the role_
       */
      roleClasses () {
        return [
          ...this.coloredClasses
        ]
      },
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
