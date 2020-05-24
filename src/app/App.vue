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
  import Navigation from './components/navigation/Navigation'
  import Themer from './components/themer/Themer'

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
        historyLines: [
          '# History',
          ' ',
          'If you liked this do check out [an old iteration](https://vjs.dhruvkb.now.sh/) of the portfolio.',
          'It has a certain simplicity that\'s hard to put into words.',
          ' '
        ],
        creditLines: [
          '# Credits',
          ' ',
          '## Thanks',
          'Thank you, mummy.',
          'Thank you, papa.',
          'Thank you, Anu.',
          ' ',
          '## Color scheme',
          'Mad props to Ethan Schoonover for [Solarized](https://ethanschoonover.com/solarized/), a color scheme with many unique properties.',
          ' ',
          '## Inspirations',
          '- [Debashish Nayak](https://theindianotaku.github.io)',
          '- [Mohit Virli](https://mohitvirli.github.io)',
          '- [Praduman Goyal](https://pradumangoyal.github.io)',
          '- [Meet Vora](https://meetvora.github.io)',
          ' '
        ]
      }
    },
    methods: {
      emitSignal () {
        this.$root.$emit('triggerScroll')
      },
      reciteHistory () {
        this.historyLines.forEach((line) => {
          this.log(line)
        })
      },
      rollCredits () {
        this.creditLines.forEach((line) => {
          this.log(line)
        })
      },
      log (line) {
        let formatString = ''
        if (line.includes('##')) {
          formatString = ' font-size: 1.5em; color: #859900'
        } else if (line.includes('#')) {
          formatString = 'font-size: 2em; color: #d33682'
        }
        console.log(`%c${line}`, formatString)
      }
    },
    mounted () {
      console.clear()
      this.reciteHistory()
      this.rollCredits()
    }
  }
</script>

<style lang="scss" src="./App.scss">
</style>
