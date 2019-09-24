<template>
  <div class="intro">
    <div class="red-colored">
      <pre class="ascii-art full-sized">
  __   __                                __       __
 /\ \ /\ \                              /\ \     /\ \
 \_\ \\ \ \___    _ __   __  __   __  __\ \ \/'\ \ \ \____
 /'_` \\ \  _ `\ /\`'__\/\ \/\ \ /\ \/\ \\ \ , /_ \ \ '__`\
/\ \L\ \\ \ \ \ \\ \ \/ \ \ \_\ \\ \ \_/ |\ \ \\`\ \ \ \L\ \
\ \___,_\\ \_\ \_\\ \_\  \ \____/ \ \___/  \ \_\ \_\\ \_,__/
 \/__,_ / \/_/\/_/ \/_/   \/___/   \/__/    \/_/\/_/ \/___/</pre>
      <pre class="ascii-art miniaturised">
     ____                 __    __
 ___/ / /  ______ ___  __/ /__ / /
/ _  / _ \/ __/ // / |/ /  '_// _ \
\_,_/_//_/_/  \_,_/|___/_/\_\/_.__/</pre>
    </div>
    <p>
      <strong>resume: </strong>
      <span class="yellow-colored boxed">
        <a href="https://dhruvkb.github.io/resume/writer.pdf" target="_blank">
          <strong>software developer</strong>
          <FontAwesomeIcon
            :icon="['fas', 'download']"
            fixed-width/>
        </a>
      </span>
      and
      <span class="yellow-colored boxed">
        <a href="https://dhruvkb.github.io/resume/writer.pdf" target="_blank">
          <strong>technical writer</strong>
          <FontAwesomeIcon
            :icon="['fas', 'download']"
            fixed-width/>
        </a>
      </span>
    </p>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faDownload } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faDownload)

  /**
   * This command presents the introductory ASCII art.
   */
  export default {
    name: 'Introduction',
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style scoped lang="stylus" src="./Introduction.styl">
</style>
