<template>
  <Grid class="social">
    <GridCell :span-set="[12, 6, 12, 12, 12]">
      <Card
        :color="color"
        title="You meant socially?">
        <p>
          In that case, you can connect with me on any of my social media
          presences. I'm way more active on GitHub (duh!) than I am on any
          of these other sites. You can see photos of the cool stuff I've
          come across on Instagram, all my favourite music is on Apple
          Music and I irregularly write on my blog.
        </p>
        <RouterLink
          class="cta"
          tabindex="0"
          :to="{name: 'blog'}"
          @focus.native="handleCtaFocus"
          @blur.native="handleCtaBlur">
          <Pointer
            :color="color"
            :is-focused="isCtaFocused">
            <template #default>Read my blog</template>
            <template #punctuation>!</template>
          </Pointer>
        </RouterLink>
      </Card>
    </GridCell>

    <GridCell
      v-for="(category, index) in media"
      :key="index"
      :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        :title="category.heading">
        <div class="stuff">
          <Medium
            v-for="(item, count) in category.list"
            v-bind="item"
            :path="paths[item.brand]"
            :key="count"/>
        </div>
      </Card>
    </GridCell>
  </Grid>
</template>

<script>
  import { path as gitHub } from 'simple-icons/icons/github'
  import { path as linkedIn } from 'simple-icons/icons/linkedin'
  import { path as facebook } from 'simple-icons/icons/facebook'
  import { path as twitter } from 'simple-icons/icons/twitter'
  import { path as instagram } from 'simple-icons/icons/instagram'
  import { path as appleMusic } from 'simple-icons/icons/applemusic'
  import { path as spotify } from 'simple-icons/icons/spotify'

  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Pointer from '@/components/common/pointer/Pointer'

  import Medium from '@/components/contact/medium/Medium'

  import actionable from '@/mixins/actionable'
  import colored from '@/mixins/colored'

  import media from '@/data/media.json'

  export default {
    name: 'Social',
    mixins: [
      actionable,
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Pointer,

      Medium
    },
    data () {
      return {
        media,
        paths: {
          gitHub,
          linkedIn,
          facebook,
          twitter,
          instagram,
          appleMusic,
          spotify
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Social.scss"/>
