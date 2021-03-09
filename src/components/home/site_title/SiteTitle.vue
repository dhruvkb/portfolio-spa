<template>
  <div
    class="site-title"
    :class="siteTitleClasses">
    <h1
      v-if="isSmall"
      class="handle">
      <span class="text">@fewwwww</span>
    </h1>
    <template v-else>
      <h1 class="first name">
        <span class="text">Suning</span>
      </h1>
      <h1 class="last name">
        <span class="text">Yao</span>
      </h1>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SiteTitle',
    props: {
      /**
       * _whether to render the smaller version of the title_
       *
       * The smaller version is meant to be used in the header.
       */
      isSmall: {
        type: Boolean
      }
    },
    computed: {
      /**
       * Get the classes to use on the site title.
       * @returns {Array} an array of all the classes to apply on the element
       */
      siteTitleClasses () {
        return [
          {
            small: this.isSmall
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./SiteTitle.scss"/>
