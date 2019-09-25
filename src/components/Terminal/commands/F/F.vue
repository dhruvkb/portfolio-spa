<template>
  <div class="f">
    <template v-if="paid">
      <span class="green-colored inverted">
        <FontAwesomeIcon
          :icon="['fas', 'check']"
          fixed-width/>
        Paid respects!
      </span>
    </template>
    <template v-else>
      <span class="yellow-colored inverted">
        <FontAwesomeIcon
          :icon="['fas', 'circle-notch']"
          fixed-width
          spin/>
        Paying respects…
      </span>
    </template>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheck, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faCheck, faCircleNotch)

  export default {
    name: 'F',
    components: {
      FontAwesomeIcon
    },
    data () {
      return {
        paid: false,
        interval: 5
      }
    },
    mounted () {
      setTimeout(() => {
        this.paid = true
      }, this.interval * 1000)
    }
  }
</script>
