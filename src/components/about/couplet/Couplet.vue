<template>
  <div class="couplet" :class="coupletClasses">
    <div class="dom">
      <!-- @slot Major text goes here -->
      <slot name="dom">{{ dom }}</slot>
    </div>
    <div class="sub">
      <!-- @slot Minor text goes here -->
      <slot name="sub">{{ sub }}</slot>
    </div>
  </div>
</template>

<script>
  import colored from '@/mixins/colored'

  /**
   * This component presents two pieces information in the form of a major and minor point.
   */
  export default {
    name: 'Couplets',
    mixins: [
      colored
    ],
    props: {
      /**
       * _the major text in the couplet_
       */
      dom: {
        type: String
      },
      /**
       * _the minor text in the couplet_
       */
      sub: {
        type: String
      }
    },
    computed: {
      /**
       * Get the classes to use on the couplet.
       * @returns {Array} an array of all the classes to apply on the element
       */
      coupletClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Couplet.scss"/>
