<template>
  <Card class="preview">
    <template #title>
      <span class="top secondary-colored">
        <span
          class="created-at"
          :title="absoluteDate(post.created)">
          <FontAwesomeIcon
            :icon="['fas', 'calendar-day']"
            fixed-width/>
          {{ relativeDate(post.created) }}
        </span>
        <span
          v-if="post.tags.length"
          class="tags">
          <FontAwesomeIcon
            :icon="['fas', 'hashtag']"
            fixed-width/>
          {{ post.tags.join(', ') }}
        </span>
      </span>
    </template>

    <div class="stuff">
      <RouterLink
        :to="{name: 'post', params: {slug: post.slug}}"
        :title="`Read '${post.title}'.`">
        <h6 :class="`${color}-colored`">
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
  import moment from 'moment'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCalendarDay,
    faHashtag,
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import colored from '@/mixins/colored'

  import Card from '@/components/card/Card'

  library.add(
    faCalendarDay,
    faHashtag,
    faArrowRight
  )

  export default {
    name: 'Preview',
    mixins: [
      colored
    ],
    components: {
      FontAwesomeIcon,

      Card
    },
    props: {
      /**
       * _the blog post previewed by the card_
       */
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      /**
       * Get a relative date from the timestamp.
       * @param created - computer readable timestamp
       * @return {string} the date relative to today
       */
      relativeDate (created) {
        return moment(created).fromNow()
      },
      /**
       * Get a human-readable date from the timestamp.
       * @param created - computer readable timestamp
       * @return {string} the date in a human-readable format
       */
      absoluteDate (created) {
        return moment(created).format('Do MMMM, YYYY')
      }
    }
  }
</script>

<style scoped lang="scss" src="./Preview.scss">
</style>
