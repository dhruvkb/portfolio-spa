<template>
  <div class="carousel">
    <div
      class="viewport"
      @wheel="scrolled">
      <div
        class="item"
        v-for="(item, index) in content"
        :key="index"
        ref="items">
        <!-- @slot Content goes here -->
        <slot :item="item"/>
      </div>
    </div>
    <div
      class="controls">
      <button
        v-for="index in content.length"
        :key="index"
        @click="switchTo(index - 1)">
        <FontAwesomeIcon
          class="icon"
          :class="{active: index - 1 === currentIndex}"
          :icon="['fas', 'circle']"
          size="xs"/>
      </button>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCircle } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { debounce } from 'lodash'

  library.add(faCircle)

  export default {
    name: 'Carousel',
    components: {
      FontAwesomeIcon
    },
    props: {
      content: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        currentIndex: 0,
        interval: 8,
        updateLooper: null
      }
    },
    methods: {
      scrolled: debounce(
        function (event) {
          if (event.deltaX < 0) {
            this.currentIndex--
            if (this.currentIndex === -1) {
              this.currentIndex = 0
            }
          } else {
            this.currentIndex++
            if (this.currentIndex === this.content.length) {
              this.currentIndex = this.content.length - 1
            }
          }
          this.restart()
        },
        500,
        {
          leading: true,
          trailing: false
        }
      ),
      switchTo (index) {
        this.currentIndex = index
        this.restart()
      },
      restart () {
        this.stop()
        this.loop()
      },
      loop () {
        this.updateLooper = setInterval(() => {
          this.currentIndex = ++this.currentIndex % this.content.length
        }, this.interval * 1000)
      },
      stop () {
        clearInterval(this.updateLooper)
      }
    },
    watch: {
      currentIndex: function () {
        this.$refs.items[this.currentIndex].scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    mounted () {
      this.loop()
    },
    beforeDestroy () {
      this.stop()
    }
  }
</script>

<style scoped lang="stylus" src="./Carousel.styl">
</style>
