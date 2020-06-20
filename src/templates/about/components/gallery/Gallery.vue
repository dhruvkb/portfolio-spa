<template>
  <div>
    <Card
      color="orange"
      title="Photos">
      <Carousel
        class="gallery"
        v-bind="imageCarouselOptions">
        <Slide
          v-for="(photo, index) in photos"
          :key="index">
          <div class="content">
            <div
              class="photo"
              :style="photoStyles(photo)"
              :title="photo.description.replace(/<\/?[a-z]+>/g, '')">
            </div>
            <span class="caption" v-html="photo.description"></span>
          </div>
        </Slide>
      </Carousel>
    </Card>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  import carouselled from '@/mixins/carouselled'

  import Card from '@/components/card/Card'

  export default {
    name: 'Gallery',
    mixins: [
      carouselled
    ],
    components: {
      Carousel,
      Slide,

      Card
    },
    data () {
      return {
        photos: [
          {
            source: require('@/assets/photos/1.jpg'),
            description: 'I love <strong>doggos</strong>…'
          },
          {
            source: require('@/assets/photos/2.jpg'),
            description: '…and <strong>flowers</strong>…'
          },
          {
            source: require('@/assets/photos/3.jpg'),
            description: '…and <strong>gardens</strong>…'
          },
          {
            source: require('@/assets/photos/4.jpg'),
            description: '…and, of course, <strong>coffee</strong>.'
          },
          {
            source: require('@/assets/photos/5.jpg'),
            description: '<strong>Ronak</strong> and <strong>Vipul</strong> are my friends…'
          },
          {
            source: require('@/assets/photos/8.jpg'),
            description: '…and so is <strong>Bhushan</strong>.'
          },
          {
            source: require('@/assets/photos/6.jpg'),
            description: 'Meet <strong>Surya</strong>…'
          },
          {
            source: require('@/assets/photos/7.jpg'),
            description: '… and <strong>Praduman</strong>. We love memes.'
          },
          {
            source: require('@/assets/photos/9.jpg'),
            description: '<strong>Vineet</strong> sir is a designer…'
          },
          {
            source: require('@/assets/photos/10.jpg'),
            description: '…and <strong>Debashish</strong> sir is a frontend developer.'
          },
          {
            source: require('@/assets/photos/12.jpg'),
            description: 'This is <strong>Aman</strong>…'
          },
          {
            source: require('@/assets/photos/11.jpg'),
            description: '…and my juniors from a <strong>trekking trip</strong>.'
          }
        ]
      }
    },
    methods: {
      /**
       * Get the styles to apply on the photo.
       * @param {Object} photo - the properties of the photo to display
       * @return {Object} an mapping of CSS properties and values to apply on the element
       */
      photoStyles (photo) {
        return {
          '--image-url': `url(${photo.source})`
        }
      }
    }
  }
</script>

<style lang="scss" src="./Gallery.scss">
</style>
