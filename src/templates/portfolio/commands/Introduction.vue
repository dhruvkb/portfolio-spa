<template>
  <div class="intro">
    <div class="red-colored" title="This terminal has easter-eggs!">
      <pre class="ascii-art big">
  __   __                                __       __
 /\ \ /\ \                              /\ \     /\ \
 \_\ \\ \ \___    _ __   __  __   __  __\ \ \/'\ \ \ \____
 /'_` \\ \  _ `\ /\`'__\/\ \/\ \ /\ \/\ \\ \ , /_ \ \ '__`\
/\ \L\ \\ \ \ \ \\ \ \/ \ \ \_\ \\ \ \_/ |\ \ \\`\ \ \ \L\ \
\ \___,_\\ \_\ \_\\ \_\  \ \____/ \ \___/  \ \_\ \_\\ \_,__/
 \/__,_ / \/_/\/_/ \/_/   \/___/   \/__/    \/_/\/_/ \/___/</pre>
      <pre class="ascii-art small">
     __ __                     __    __
 ___/ // /   ____ __ __ _  __ / /__ / /
/ _  // _ \ / __// // /| |/ //  '_// _ \
\_,_//_//_//_/   \_,_/ |___//_/\_\/_.__/</pre>
    </div>
    <p>
      <strong>résumé: </strong>
      <span class="yellow-colored boxed">
        <a href="https://dhruvkb.github.io/resume/developer.pdf" target="_blank">
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

<style scoped lang="scss">
  @import '~@/styles/tokens/dimensions.scss';
  @import '~@/styles/tokens/sizes.scss';
  @import '~@/styles/tokens/weights.scss';

  @import '~@/styles/utils/media.scss';

  .intro {
    .ascii-art {
      font-size: $size-xs;
      font-weight: $weight-semibold;

      margin: -#{$dimen-line} 0 0 0;

      &.big {
        $devices: 'phone';
        @include device-specific($devices) {
          display: none;
        }
      }

      &.small {
        $devices: 'tablet', 'desktop';
        @include device-specific($devices) {
          display: none;
        }
      }
    }
  }
</style>
