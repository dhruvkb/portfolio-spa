<template>
  <div class="f">
    <template v-if="paid">
      <span class="green-colored">
        <Icon
          :path="icons.check"
          icon="check"
          is-inline/>
        Paid respects!
      </span>
    </template>
    <template v-else>
      <span class="yellow-colored">
        <Spinner/>
        Paying respects…
      </span>
    </template>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import Spinner from '@/components/portfolio/spinner/Spinner'

  import check from '@/assets/icons/check.svg'

  export default {
    name: 'F',
    components: {
      Icon,

      Spinner
    },
    data () {
      return {
        paid: false,
        interval: 5,
        icons: {
          check
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.paid = true
      }, this.interval * 1000)
    }
  }
</script>

<style scoped lang="scss">
  .f {
    .icon {
      --stroke-width: 48px; // 24 / 16 * 32px
    }
  }
</style>
