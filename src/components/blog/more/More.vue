<template>
  <div
    v-if="totalCount > posts.length"
    class="more">
    <Spinner v-if="isFetching"/>
    <button
      v-else
      class="load-more"
      @click="fetchPosts">
      <Pointer>
        <template #default>Load more posts</template>
      </Pointer>
    </button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import Pointer from '@/components/common/pointer/Pointer'

  import Spinner from '@/components/blog/spinner/Spinner'

  export default {
    name: 'More',
    components: {
      Pointer,

      Spinner
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
        'fetchPosts'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./More.scss"/>
