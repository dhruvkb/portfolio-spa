<template>
  <FontAwesomeLayers class="indicator">
    <FontAwesomeIcon
      class="direction"
      :icon="['fas', 'angle-down']"
      fixed-width/>
    <FontAwesomeIcon
      class="direction delayed"
      :icon="['fas', 'angle-down']"
      fixed-width/>
  </FontAwesomeLayers>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeIcon,
    FontAwesomeLayers
  } from '@fortawesome/vue-fontawesome'

  library.add(faAngleDown)

  /**
   * This component indicates the presence of more content by animating a
   * downward-pointing arrow.
   */
  export default {
    name: 'Indicator',
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers
    }
  }
</script>

<style scoped lang="scss" src="./Indicator.scss">
</style>
