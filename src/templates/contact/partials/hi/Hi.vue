<template>
  <Grid class="hi">
    <GridCell
      class="say-hi"
      :span-set="[12, 6, 8, 9, 9]">
      <Card
        :color="color"
        title="Say 'Hi!'">
        <p>
          I would absolutely love to connect with you. Being an introvert
          , I sometimes shy away from initiating conversations but if you take
          the initiative, I'll be more than happy to reciprocate!
        </p>
        <p>
          We could talk over coffee. I absolutely love flat white.
        </p>
        <RouterLink
          class="cta"
          tabindex="0"
          :to="{name: 'about'}"
          @focus.native="handleCtaFocus"
          @blur.native="handleCtaBlur">
          <Pointer
            :color="color"
            :is-focused="isCtaFocused">
            <template #default>Know me better</template>
          </Pointer>
        </RouterLink>
      </Card>
    </GridCell>

    <GridCell
      class="vertical photo-cell"
      :span-set="[6, 6, 4, 3, 3]">
      <Photo
        v-bind="images.portrait"
        :vertical-aspect="16/10"/>
    </GridCell>

    <GridCell
      v-for="(image, index) in images.landscapes"
      :key="index"
      class="horizontal photo-cell"
      :span-set="[6, 6, 4, 3, 3]">
      <Photo
        v-bind="image"
        :vertical-aspect="10/16"/>
    </GridCell>
  </Grid>
</template>

<script>
  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Pointer from '@/components/common/pointer/Pointer'

  import Photo from '@/components/contact/photo/Photo'

  import actionable from '@/mixins/actionable'
  import colored from '@/mixins/colored'

  import portrait from '@/assets/photos/portrait.jpg'
  import landscapeOne from '@/assets/photos/landscape_1.jpg'
  import landscapeTwo from '@/assets/photos/landscape_2.jpg'
  import landscapeThree from '@/assets/photos/landscape_3.jpg'

  export default {
    name: 'Hi',
    mixins: [
      actionable,
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Pointer,

      Photo
    },
    data () {
      return {
        images: {
          portrait: {
            path: portrait,
            caption: 'A friend\'s home in Bangalore'
          },
          landscapes: [
            {
              path: landscapeOne,
              caption: 'View of the hills at McLeod Ganj'
            },
            {
              path: landscapeTwo,
              caption: 'Definitely not Japan'
            },
            {
              path: landscapeThree,
              caption: 'An abandoned kennel in Mumbai'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Hi.scss"/>
