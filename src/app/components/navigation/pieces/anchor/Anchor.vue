<template>
  <RouterLink
    class="anchor"
    :class="linkClasses"
    tabindex="0"
    :to="link.to">
    <!-- Content goes here -->
    <slot>
      <span class="text">
        {{ link.text }}
      </span>

      <FontAwesomeIcon
        class="icon"
        :icon="['fas', link.icon]"
        fixed-width/>
    </slot>
  </RouterLink>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'

  /**
   * This component is one anchor link in a navbar.
   */
  export default {
    name: 'Anchor',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _the attributes of the link, encapsulated in an object_
       *
       * Keys ∈ {`'to'`, `'text'`, `'icon'`}
       */
      link: {
        type: Object,
        required: true,
        validator: val => val.hasOwnProperty('to')
      }
    },
    computed: {
      linkClasses () {
        return [
          ...this.coloredClasses,
          {
            'exact': this.link.isExact
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Anchor.scss">
</style>
