<template>
  <RouterLink
    :exact="link.isExact"
    :to="link.to">
    <!-- Content goes here -->
    <slot>
      <span class="text">
        {{ link.text }}
      </span>
      <FontAwesomeIcon
        class="icon"
        :icon="['fas', link.icon]"
        fixed-width
        :title="link.text"/>
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
       * Keys ∈ {`'to'`, `'isExact'`, `'text'`, `'icon'`}
       */
      link: {
        type: Object,
        required: true,
        validator: val => ['to', 'isExact', 'text', 'icon'].every(
          key => val.hasOwnProperty(key)
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./NavigationLink.styl">
</style>
