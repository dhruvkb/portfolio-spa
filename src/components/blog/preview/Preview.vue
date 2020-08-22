<template>
  <Card class="preview">
    <template #title>
      <Metadata
        :absolute-date="post.publicationDate.absolute"
        :relative-date="post.publicationDate.relative"
        :tags="post.tags"/>
    </template>

    <div class="stuff">
      <RouterLink
        class="title-link"
        :class="`${color}-colored`"
        tabindex="-1"
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <h6>
          {{ post.title }}
        </h6>
      </RouterLink>

      <p>{{ post.excerpt }}</p>

      <RouterLink
        class="cta"
        :class="`${color}-colored`"
        tabindex="0"
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`"
        @focus.native="handleCtaFocus"
        @blur.native="handleCtaBlur">
        <Pointer :is-focused="isCtaFocused">
          <template #default>Read more</template>
          <template #punctuation>?</template>
        </Pointer>
      </RouterLink>
    </div>
  </Card>
</template>

<script>
  import Card from '@/components/layout/card/Card'

  import Pointer from '@/components/common/pointer/Pointer'

  import Metadata from '@/components/blog/metadata/Metadata'

  import actionable from '@/mixins/actionable'
  import colored from '@/mixins/colored'

  export default {
    name: 'Preview',
    mixins: [
      actionable,
      colored
    ],
    components: {
      Card,

      Pointer,

      Metadata
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

<style scoped lang="scss" src="./Preview.scss"/>
