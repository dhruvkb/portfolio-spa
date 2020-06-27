<template>
  <Card class="preview">
    <template #title>
      <Metadata
        :timestamp="post.created"
        :tags="post.tags"/>
    </template>

    <div class="stuff">
      <RouterLink
        class="title-link"
        :class="`${color}-colored`"
        tabindex="0"
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <h6>
          {{ post.title }}
        </h6>
      </RouterLink>

      <div v-html="post.excerpt">
      </div>

      <RouterLink
        class="read-more"
        tabindex="-1"
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <ArrowControl :color="color">
          <template #default>Read more</template>
          <template #punctuation>?</template>
        </ArrowControl>
      </RouterLink>
    </div>
  </Card>
</template>

<script>
  import colored from '@/mixins/colored'

  import ArrowControl from '@/components/arrow_control/ArrowControl'
  import Card from '@/components/card/Card'

  import { Blog } from '@/templates/blog/Blog'

  export default {
    name: 'Preview',
    mixins: [
      colored
    ],
    components: {
      ArrowControl,
      Card,

      Metadata: Blog.Metadata
    },
    props: {
      /**
       * _the blog post previewed by the card_
       */
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss" src="./Preview.scss">
</style>
