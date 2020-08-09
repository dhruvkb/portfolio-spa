<template>
  <div class="work" :class="workClasses">
    <transition appear :name="transitionName" mode="out-in">
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
    data () {
      return {
        transitionName: 'flip-vertical'
      }
    },
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
    },
    watch: {
      /**
       * Determine the transition name based on whether the animation is going
       * in the forward or backward direction.
       * @param {string} to - the new value of the index
       * @param {string} from - the old value of the index
       */
      index (to, from) {
        if (to > from) { // Animation is moving forward
          this.transitionName = 'flip-vertical'
        } else { // Animation is moving backward
          this.transitionName = 'flip-vertical-rev'
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Work.scss"/>

<i18n src="./lang.json"/>
