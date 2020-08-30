<template>
  <footer class="footer">
    <Navigation is-phone/>
  </footer>
</template>

<script>
  import Navigation from '@/components/app/navigation/Navigation'

  export default {
    name: 'Footer',
    components: {
      Navigation
    }
  }
</script>

<style scoped lang="scss" src="./Footer.scss"/>
