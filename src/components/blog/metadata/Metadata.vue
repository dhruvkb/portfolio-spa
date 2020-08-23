<template>
  <div class="metadata">
    <span
      class="point created-at secondary-colored"
      :title="absoluteDate">
      <Icon
        icon="calendar"
        :path="icons.calendar"/>
      {{ relativeDate }}
    </span>

    <span
      v-if="tags.length"
      class="point tags secondary-colored">
      <Icon
        icon="tags"
        :path="icons.tags"/>
      {{ tags.join(', ') }}
    </span>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import calendar from '@/assets/icons/calendar.svg'
  import tags from '@/assets/icons/tags.svg'

  export default {
    name: 'Metadata',
    components: {
      Icon
    },
    data () {
      return {
        icons: {
          calendar,
          tags
        }
      }
    },
    props: {
      /**
       * _the date when the post was published_
       */
      absoluteDate: {
        type: String,
        required: true
      },
      /**
       * _the date when the post was published, relative to today_
       */
      relativeDate: {
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
    }
  }
</script>

<style scoped lang="scss" src="./Metadata.scss"/>
