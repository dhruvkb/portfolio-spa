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
      @after-leave="handleAfterLeave">
      <RouterView/>
    </transition>

    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/app/header/Header'
  import Footer from '@/components/app/footer/Footer'
  import Themer from '@/components/app/themer/Themer'

  import colors from '@/styles/exports/colors.scss'

  import logs from '@/data/logs.json'

  /**
   * This is the root level App component.
   */
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Themer
    },
    metaInfo: {
      title: 'Web dev & more', // fallback if page does not populate
      titleTemplate: '%s | Suning Yao'
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
        this.logTitle('@suningyao')
        this.logs.forEach(category => {
          this.logHeading(category.heading)
          category.lines.forEach(line => this.logContent(line))
          console.log(' ')
        })
      },
      /**
       * Log the given string, formatted as a title.
       * @param {string} title - the title of the site
       */
      logTitle (title) {
        const titleFormat = (
          'color: white; ' +
          'font-size: 2em; ' +
          'font-weight: 800; ' +
          `background: linear-gradient(90deg, ${colors.colorAccentRed}, ${colors.colorAccentMagenta}); ` +
          'padding: 0.25em; ' +
          'border-radius: 0.25em;'
        )
        console.log(`%c${title}`, titleFormat)
      },
      /**
       * Log the given string, formatted as a heading.
       * @param {string} heading - the title of a particular category
       */
      logHeading (heading) {
        const headingFormat = `font-size: 1.5em; color: ${colors.colorAccentRed};`
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
       * Emit a 'trigger-scroll' event to reset the scroll position to zero.
       *
       * This event is emitted when the page switch is halfway through, that is
       * when the leaving page has exited the viewport but when the entering
       * page has not come in yet.
       */
      emitTriggerScroll () {
        this.$root.$emit('trigger-scroll')
      },

      handleAfterLeave () {
        this.emitTriggerScroll()
      }
    },
    mounted () {
      if (process.env.NODE_ENV === 'production') {
        console.clear()
      } else {
        document.documentElement.classList.add('development')
      }
      this.logAll()
    }
  }
</script>

<style scoped lang="scss" src="./App.scss"/>

<!-- This is styling for the entire site. -->
<style lang="scss" src="@/styles/base/index.scss"/>
