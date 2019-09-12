<template>
  <div
    :class="appClasses"
    id="app">
    <div class="navigation">
      <Navigation>
        <template #extras>
          <Themer :theme.sync="theme"/>
        </template>
      </Navigation>
    </div>
    <RouterView/>
  </div>
</template>

<script>
  import Themer from '@/components/Themer/Themer'
  import Navigation from '@/components/Navigation/Navigation'

  /**
   * This is the root level App component.
   */
  export default {
    name: 'App',
    components: {
      Navigation,
      Themer
    },
    data: function () {
      return {
        theme: 'dark'
      }
    },
    computed: {
      /**
       * _the classes to apply on the entire #app div_
       */
      appClasses: function () {
        return [
          `${this.theme}-themed`
        ]
      }
    },
    mounted: function () {
      if (localStorage.theme) {
        // Switch to last used theme
        this.theme = localStorage.theme
      }
    }
  }
</script>

<style lang="stylus" src="./App.styl">
</style>
