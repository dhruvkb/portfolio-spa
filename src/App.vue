<template>
  <div id="app">
    <Navigation>
      <template #extras>
        <Themer :theme.sync="theme"/>
      </template>
    </Navigation>
    <transition
      name="fade"
      mode="out-in"
      appear
      @after-leave="emitSignal">
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
       * _the action to undertake when theme changes_
       */
      theme () {
        document.documentElement.className = this.htmlClasses.join('')
      }
    },
    methods: {
      emitSignal () {
        this.$root.$emit('triggerScroll')
      }
    },
    created () {
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
