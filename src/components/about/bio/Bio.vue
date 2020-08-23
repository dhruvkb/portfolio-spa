<template>
  <div class="bio">
    <span :class="bioIconClasses">
      <Icon
        v-if="icon"
        :icon="icon"
        :path="path"/>
      <Repr
        v-else
        :path="path"/>
    </span>
    <div class="text">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'
  import Repr from '@/components/common/repr/Repr'

  import colored from '@/mixins/colored'

  /**
   * This component represents one point about my personality, such as a
   * preference, an opinion or a hobby.
   */
  export default {
    name: 'Bio',
    mixins: [
      colored
    ],
    components: {
      Icon,
      Repr
    },
    props: {
      /**
       * _an icon for bio point_
       */
      icon: {
        type: String
      },
      /**
       * _the path to draw an icon for bio point_
       */
      path: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Get the classes to use on the bio icon.
       * @returns {Array} an array of all the classes to apply on the element
       */
      bioIconClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Bio.scss"/>
