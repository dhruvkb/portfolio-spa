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
    <Icon
      :icon="['fab', 'github']"
      fixed-width/>
  </a>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  library.add(faGithub)

  export default {
    name: 'Source',
    mixins: [
      colored
    ],
    components: {
      Icon
    },
    data () {
      return {
        url: 'https://github.com/dhruvkb/portfolio/'
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
