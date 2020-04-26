<template>
  <div id="app">
    <Navigation>
      <template #extras>
        <Themer/>
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
    methods: {
      emitSignal () {
        this.$root.$emit('triggerScroll')
      }
    }
  }
</script>

<style lang="scss" src="./App.scss">
</style>
