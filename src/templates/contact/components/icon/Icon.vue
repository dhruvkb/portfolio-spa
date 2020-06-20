<template>
  <span class="icon">
    <FontAwesomeIcon
      class="actual-icon"
      :icon="['fas', 'paper-plane']"/>
  </span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faPaperPlane)

  /**
   * This component is the icon used in the Contact page heading.
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
