<template>
  <span class="spinner"><FontAwesomeIcon
    :icon="['fas', 'i-cursor']"
    fixed-width/></span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faICursor } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faICursor)

  /**
   * Indicates loading status
   */
  export default {
    name: 'Spinner',
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style scoped lang="stylus" src="./Spinner.styl">
</style>
