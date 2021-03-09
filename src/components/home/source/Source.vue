<template>
  <a
    v-shortkey="['s']"
    tabindex="0"
    class="source"
    :class="sourceClasses"
    :href="url"
    target="_blank"
    title="[S] See the source code."
    @shortkey="$navigateOutTo(url)">
    <Repr :path="paths.gitHub"/>
  </a>
</template>

<script>
  import { path as gitHub } from 'simple-icons/icons/github'

  import Repr from '@/components/common/repr/Repr'

  import colored from '@/mixins/colored'

  export default {
    name: 'Source',
    mixins: [
      colored
    ],
    components: {
      Repr
    },
    data () {
      return {
        url: 'https://github.com/fewwwww',
        paths: {
          gitHub
        }
      }
    },
    computed: {
      /**
       * Get the classes to use on the source code link.
       * @returns {Array} an array of all the classes to apply on the element
       */
      sourceClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Source.scss"/>
