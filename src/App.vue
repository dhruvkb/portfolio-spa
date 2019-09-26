<template>
  <div id="app">
    <Navigation>
      <template #extras>
        <Themer :theme.sync="theme"/>
      </template>
    </Navigation>
    <transition :name="transitionName" mode="out-in">
      <RouterView/>
    </transition>
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
    data () {
      return {
        theme: null,
        transitionName: null
      }
    },
    computed: {
      /**
       * _the classes to apply on the entire DOM root_
       */
      htmlClasses () {
        return [
          `${this.theme}-themed`
        ]
      }
    },
    watch: {
      /**
       * _the action to undertake when $route changes_
       */
      $route (to, from) {
        if (to.name && from.name) {
          let routes = [
            'home',
            'portfolio',
            'about',
            'contact',
            'credits'
          ]
          let toIndex = routes.indexOf(to.name)
          let fromIndex = routes.indexOf(from.name)

          this.transitionName = toIndex > fromIndex
            ? 'slide-right'
            : 'slide-left'
        } else {
          this.transitionName = null
        }
      },
      /**
       * _the action to undertake when theme changes_
       */
      theme () {
        document.documentElement.className = this.htmlClasses.join('')
      }
    },
    methods: {
      handleShortkey (event) {
        switch (event.srcKey) {
          case 'home':
            this.$router.push('home')
            break
          case 'portfolio':
            this.$router.push('portfolio')
            break
        }
      }
    },
    mounted () {
      if (localStorage.theme) {
        // Switch to last used theme
        this.theme = localStorage.theme
      } else {
        this.theme = 'dark'
      }
    }
  }
</script>

<style lang="stylus" src="./App.styl">
</style>
