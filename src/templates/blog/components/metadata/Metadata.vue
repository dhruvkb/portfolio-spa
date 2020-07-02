<template>
  <div class="metadata secondary-colored">
    <span
      class="created-at"
      :title="absoluteDate">
      <FontAwesomeIcon
        :icon="['fas', 'calendar-day']"
        fixed-width/>
      {{ relativeDate }}
    </span>

    <span
      v-if="tags.length"
      class="tags">
      <FontAwesomeIcon
        :icon="['fas', 'hashtag']"
        fixed-width/>
      {{ tags.join(', ') }}
    </span>
  </div>
</template>

<script>
  import moment from 'moment'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCalendarDay,
    faHashtag
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faCalendarDay, faHashtag)

  export default {
    name: 'Metadata',
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _the timestamp of when the post was published_
       */
      timestamp: {
        type: String,
        required: true
      },
      /**
       * _the tags associated with any given post_
       */
      tags: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      /**
       * Get a relative date from the timestamp.
       * @returns {string} the date relative to today
       */
      relativeDate () {
        return moment(this.timestamp).calendar({
          lastWeek: '[Last] dddd',
          lastDay: '[Yesterday]',
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: '[Coming] dddd',
          sameElse: function () { return `[${this.fromNow()}]` }
        })
      },
      /**
       * Get a human-readable date from the timestamp.
       * @returns {string} the date in a human-readable format
       */
      absoluteDate () {
        return moment(this.timestamp).format('Do MMMM, YYYY')
      }
    }
  }
</script>

<style scoped lang="scss" src="./Metadata.scss">
</style>
