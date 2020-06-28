<template>
  <div
    v-observe-visibility="observerOptions"
    class="photo"
    :class="photoClasses"
    :style="photoStyles"
    :title="alt">
    <img
      :src="src"
      :alt="alt"/>
  </div>
</template>

<script>
  import intersectable from '@/mixins/intersectable'

  /**
   * This component displays a photo while maintaining the given aspect ratio.
   */
  export default {
    name: 'Photo',
    mixins: [
      intersectable
    ],
    props: {
      /**
       * _the source for the image_
       *
       * If using Webpack file loader, import the image first and then pass
       * the resulting file URL.
       */
      src: {
        type: String,
        required: true
      },
      /**
       * _the alternate text for the image_
       *
       * This populates alternative text for the image and also serves as title
       * text for the component.
       */
      alt: {
        type: String,
        required: true
      },
      /**
       * _the aspect ratio of the image expressed as a fraction of height to width_
       *
       * So a 10:16 (portrait) photo would have aspect ratio as 16/10 and
       *  a 3:2 (landscape) photo would have aspect ratio as 2/3.
       */
      verticalAspect: {
        type: Number,
        default: 1
      }
    },
    computed: {
      /**
       * Get the classes to use on the photo.
       * @returns {Array} an array of all the classes to apply on the element
       */
      photoClasses () {
        return [
          {
            ...this.intersectableClasses
          }
        ]
      },
      /**
       * Get the styles to apply on the photo.
       * @returns {Object} an mapping of CSS properties and values to apply on the element
       */
      photoStyles () {
        return {
          '--vertical-aspect': `${this.verticalAspect * 100}%`,
          '--image-url': `url(${this.src})`
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Photo.scss">
</style>
