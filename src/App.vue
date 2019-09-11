<template>
  <div
    :class="appClasses"
    id="app">
    <div class="navigation">
      <nav>
        <RouterLink
          exact
          active-class="active"
          to="/">Home
        </RouterLink>
        <RouterLink
          active-class="active"
          to="/about">About
        </RouterLink>
      </nav>
      <Themer :theme.sync="theme"/>
    </div>
    <RouterView/>
  </div>
</template>

<script>
  import Themer from '@/components/Themer/Themer'

  /**
   * This is the root level App component.
   */
  export default {
    name: 'App',
    components: {
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
