<template>
  <div class="role" :class="roleClasses">
    <Pointer
      :is-focused="isFocused">
      <template #default>
        <div
          :key="role"
          class="text">
          <span class="vowel">
            {{ vowel }}
          </span>
          <span class="actual-role">
            {{ role }}
          </span>
        </div>
      </template>
      <template #punctuation>
        <transition appear :name="transitionName" mode="out-in">
          <div :key="role" class="fullstop">.</div>
        </transition>
      </template>
    </Pointer>
  </div>
</template>

<script>
  import Pointer from '@/components/common/pointer/Pointer'

  import colored from '@/mixins/colored'
  import focusable from '@/mixins/focusable'

  import roles from '@/data/roles.json'

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
      Pointer
    },
    data () {
      return {
        roles
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
        const key = this.$getRole(this.index)
        return this.roles[key]
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

<style scoped lang="scss" src="./Role.scss"/>
