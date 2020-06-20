<template>
  <span class="icon">
    <FontAwesomeIcon
      class="actual-icon"
      :icon="['fas', 'bullhorn']"/>
  </span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faBullhorn)

  /**
   * This component is the icon used in the Blog page heading.
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
