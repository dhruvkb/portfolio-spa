<template>
  <div class="work" :class="workClasses">
    <div
      :key="work"
      class="actual-work"
      v-html="work"/>
  </div>
</template>

<script>
  import focusable from '@/mixins/focusable'

  import works from '@/data/works.json'

  export default {
    name: 'Work',
    mixins: [
      focusable
    ],
    data () {
      return {
        works
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
        const key = this.$getWork(this.index)
        const work = this.works[key]

        let text = work.main
        const array = ['one', 'two']
        array.forEach(index => {
          text = text.replace(
            `{${index}}`,
            `<strong>${work.adjectives[index]}</strong>`
          )
        })
        return text
      }
    }
  }
</script>

<style scoped lang="scss" src="./Work.scss"/>
