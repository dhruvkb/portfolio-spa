<template>
  <div class="e">
    <Concatenate :argv="['E']"/>
  </div>
</template>

<script>
  import Concatenate from '@/templates/portfolio/commands/Concatenate'

  export default {
    name: 'E',
    components: {
      Concatenate
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/styles/tokens/sizes';

  .e {
    font-size: $size-xs;
  }
</style>
