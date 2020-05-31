<template>
  <div id="app">
    <Header>
      <template #extras>
        <Themer/>
      </template>
    </Header>

    <transition
      name="fade"
      mode="out-in"
      appear
      @after-leave="emitSignal">
      <RouterView/>
    </transition>

    <Locale v-show="false"/>
  </div>
</template>

<script>
  import Locale from '@/components/locale/Locale'

  import Header from './components/header/Header'
  import Themer from './components/themer/Themer'

  import logs from './data/logs.json'

  /**
   * This is the root level App component.
   */
  export default {
    name: 'App',
    components: {
      Locale,
      Header,
      Themer
    },
    data () {
      return {
        logs
      }
    },
    methods: {
      /**
       * Log all the content in the logs file.
       */
      logAll () {
        this.logs.forEach(category => {
          this.logHeading(category.heading)
          category.lines.forEach(line => this.logContent(line))
          console.log(' ')
        })
      },
      /**
       * Log the given string, formatted as a heading.
       * @param {string} heading - the title of a particular category
       */
      logHeading (heading) {
        const headingFormat = 'font-size: 2em; color: #268bd2;'
        console.log(`%c# ${heading}`, headingFormat)
      },
      /**
       * Log the given line, formatting as a unordered list item.
       * @param {string} line - one of the bullets in a particular category
       */
      logContent (line) {
        console.log(`- ${line}`)
      },
      /**
       * When the page switch is halfway through, that is when the leaving page
       * has gone out and the entering page has not come in, emit a signal to
       * reset the scroll position to zero.
       */
      emitSignal () {
        this.$root.$emit('triggerScroll')
      }
    },
    mounted () {
      console.clear()
      this.logAll()
    }
  }
</script>

<style lang="scss" src="./App.scss">
</style>
