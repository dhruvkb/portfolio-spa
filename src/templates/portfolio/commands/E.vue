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
