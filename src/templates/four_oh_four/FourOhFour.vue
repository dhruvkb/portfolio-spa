<template>
  <div class="four-oh-four">
    <main>
      <section
        class="section"
        id="first"
        @mousemove="drawErrorWithMouse"
        @touchstart="drawErrorWithTouch"
        @touchmove="drawErrorWithTouch">
        <canvas
          class="error-place"
          ref="errorCanvas"/>

        <div class="imagery">
          <img
            :width="errorImage.width"
            :height="errorImage.height"
            :src="errorImage.source"
            ref="errorImage"/>
        </div>

        <footer>
          <p title="I made a funny!">
            You seem lost.
            Go
            <RouterLink
              tabindex="0"
              :to="{name: 'home'}"
              title="[H] Go to the homepage.">
              home</RouterLink>?
          </p>
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
  import errorSvg from '@/assets/svgs/error.svg'

  export default {
    name: 'FourOhFour',
    data () {
      return {
        canvas: null,
        context: null,
        errorImage: {
          source: errorSvg,
          width: 288,
          height: 162
        }
      }
    },
    methods: {
      setupCanvas () {
        const dpr = window.devicePixelRatio || 1

        const actualWidth = window.innerWidth
        const actualHeight = window.innerHeight

        this.canvas.width = dpr * actualWidth
        this.canvas.height = dpr * actualHeight

        this.canvas.style.width = `${actualWidth}px`
        this.canvas.style.height = `${actualHeight}px`

        this.context = this.canvas.getContext('2d')
        this.context.scale(dpr, dpr)
      },
      drawErrorWithMouse (event) {
        this.drawError(
          event.clientX - (this.errorImage.width / 2),
          event.clientY - 16
        )
      },
      drawErrorWithTouch (event) {
        event.touches.forEach(touch => {
          this.drawError(
            touch.pageX - (this.errorImage.width / 2),
            touch.pageY - 16
          )
        })
      },
      drawError (x, y) {
        this.context.drawImage(
          this.$refs.errorImage,
          x,
          y,
          this.errorImage.width,
          this.errorImage.height
        )
      }
    },
    mounted () {
      this.canvas = this.$refs.errorCanvas

      // Setup canvas now and on every resize
      this.setupCanvas()
      window.addEventListener('resize', this.setupCanvas)
    }
  }
</script>

<style scoped lang="scss" src="./FourOhFour.scss">
</style>

<i18n src="./lang.json">
</i18n>
