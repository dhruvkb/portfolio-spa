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
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <h6>
          {{ post.title }}
        </h6>
      </RouterLink>

      <div v-html="post.excerpt">
      </div>

      <RouterLink
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <div :class="['read-more', `${color}-colored`]">
          Read more
          <div class="question">?</div>
          <div class="arrow">
            <FontAwesomeIcon :icon="['fas', 'arrow-right']"/>
          </div>
        </div>
      </RouterLink>
    </div>
  </Card>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'

  import Card from '@/components/card/Card'

  import { Blog } from '@/templates/blog/Blog'

  library.add(faArrowRight)

  export default {
    name: 'Preview',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon,

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
