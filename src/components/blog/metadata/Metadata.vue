<template>
  <div class="metadata">
    <span
      class="point created-at secondary-colored"
      :title="absoluteDate">
      <Icon icon="calendar"/>
      {{ relativeDate }}
    </span>

    <span
      v-if="tags.length"
      class="point tags secondary-colored">
      <Icon icon="tags"/>
      {{ tags.join(', ') }}
    </span>
  </div>
</template>

<script>
  import moment from 'moment'

  import Icon from '@/components/common/icon/Icon'

  export default {
    name: 'Metadata',
    components: {
      Icon
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

<style scoped lang="scss" src="./Metadata.scss"/>
