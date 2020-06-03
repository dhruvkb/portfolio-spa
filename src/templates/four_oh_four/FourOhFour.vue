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
            alt="Windows 98 error message"
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
      /**
       * Set the canvas and context objects, adjusting for device pixel ratio.
       */
      setupCanvas () {
        const dpr = window.devicePixelRatio || 1

        // Reduce actual dimensions to prevent
        const actualWidth = window.innerWidth
        const actualHeight = window.innerHeight

        this.canvas.width = dpr * actualWidth
        this.canvas.height = dpr * actualHeight

        this.canvas.style.width = `${actualWidth}px`
        this.canvas.style.height = `${actualHeight}px`

        this.context = this.canvas.getContext('2d')
        this.context.scale(dpr, dpr)
      },
      /**
       * Draw an error window at the position of the mouse.
       *
       * @param {Event} event - the information about the mouse move event
       */
      drawErrorWithMouse (event) {
        this.drawError(event.clientX, event.clientY)
      },
      /**
       * Draw an error window at the position of each of the fingers.
       *
       * @param {Event} event - the information about the finger touch and move events
       */
      drawErrorWithTouch (event) {
        event.touches.forEach(touch => {
          this.drawError(touch.pageX, touch.pageY)
        })
      },
      /**
       * Draw an error window at the specified co-ordinates. The co-ordinates
       * are adjusted so that the mouse or finger is always placed on the title
       * bar, centered horizontally.
       *
       * @param {number} x - the horizontal position of the error window
       * @param {number} y - the vertical position of the error window
       */
      drawError (x, y) {
        this.context.drawImage(
          this.$refs.errorImage,
          x - (this.errorImage.width / 2),
          y - 16,
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
