<template>
  <RouterLink :to="link.to">
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

  /**
   * This component is one link in a navbar.
   */
  export default {
    name: 'NavigationLink',
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
        validator: val => ['to', 'text', 'icon'].every(
          key => val.hasOwnProperty(key)
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Link.styl">
</style>
