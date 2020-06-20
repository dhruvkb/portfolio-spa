<template>
  <div class="work" :class="workClasses">
    <transition appear name="flip-vertical" mode="out-in">
      <i18n
        :key="work"
        :path="`works.${work}.main`"
        tag="div"
        class="actual-work">
        <template #one>
          <strong>{{ $t(`works.${work}.adjectives.one`) }}</strong>
        </template>
        <template #two>
          <strong>{{ $t(`works.${work}.adjectives.two`) }}</strong>
        </template>
      </i18n>
    </transition>
  </div>
</template>

<script>
  import focusable from '@/mixins/focusable'

  export default {
    name: 'Work',
    mixins: [
      focusable
    ],
    props: {
      /**
       * _the index of the work being listed described_
       */
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      /**
       * Get the classes to use on the work ticker.
       * @returns {Array} an array of all the classes to apply on the element
       */
      workClasses () {
        return [
          { ...this.focusableClasses }
        ]
      },

      /**
       * Get the work at the index specified by the prop.
       * @returns {string} the underscored work description
       */
      work () {
        return this.$getWork(this.index)
      }
    }
  }
</script>

<style scoped lang="scss" src="./Work.scss">
</style>

<i18n src="./lang.json">
</i18n>
