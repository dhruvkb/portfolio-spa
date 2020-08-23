<template>
  <div class="site-title">
    <h1 class="first name">
      <span
        class="character"
        v-for="(character, index) in $t('dhruv').split('')"
        :key="index">{{ character }}</span>
    </h1>
    <h1 class="last name">
      <span
        class="character"
        v-for="(character, index) in $t('bhanushali').split('')"
        :key="index">{{ character }}</span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'SiteTitle'
  }
</script>

<style scoped lang="scss" src="./SiteTitle.scss">
</style>
