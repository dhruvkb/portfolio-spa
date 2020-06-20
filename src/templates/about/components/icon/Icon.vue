<template>
  <span class="icon">
    <FontAwesomeIcon
      class="actual-icon"
      :icon="['fas', 'id-badge']"/>
  </span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faIdBadge)

  /**
   * This component is the icon used in the About page heading.
   */
  export default {
    name: 'Icon',
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style scoped lang="scss" src="./Icon.scss">
</style>
