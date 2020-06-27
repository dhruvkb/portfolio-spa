<template>
  <div
    v-if="totalCount > posts.length"
    class="more">
    <Spinner v-if="isFetching"/>
    <button
      v-else
      class="load-more"
      @click="getPosts">
      <ArrowControl>
        <template #default>Load more posts</template>
        <template #punctuation>…</template>
      </ArrowControl>
    </button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import ArrowControl from '@/components/arrow_control/ArrowControl'

  import { Blog } from '@/templates/blog/Blog'

  export default {
    name: 'More',
    components: {
      ArrowControl,

      Spinner: Blog.Spinner
    },
    computed: {
      ...mapState('blog', [
        'totalCount',
        'posts',
        'isFetching'
      ])
    },
    methods: {
      ...mapActions('blog', [
        'getPosts'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./More.scss">
</style>
