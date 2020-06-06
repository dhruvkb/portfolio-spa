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
    <div class="resume">
      <strong>résumés: </strong>
      <div class="links">
        <a
          v-for="(resume, index) in resumes"
          v-shortkey="[resume.shortkey]"
          :key="index"
          class="link yellow-colored inverted"
          :href="resume.url"
          target="_blank"
          :title="resumeLinkTitleText(resume.shortkey, resume.name)"
          @shortkey="$navigateOutTo(resume.url)">
          <FontAwesomeIcon
            :icon="['fas', 'download']"
            fixed-width/>
          <span>{{ resume.name }}</span>
        </a>
        <a
          v-shortkey="['s']"
          class="link yellow-colored boxed"
          :href="resumeRepoUrl"
          target="_blank"
          title="[S] See the LaTeX source code."
          @shortkey="$navigateOutTo(resumeRepoUrl)">
          <FontAwesomeIcon
            :icon="['fab', 'github']"
            fixed-width/>
          <span>source code</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faDownload } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faDownload, faGithub)

  /**
   * This command presents the introductory ASCII art.
   */
  export default {
    name: 'Introduction',
    components: {
      FontAwesomeIcon
    },
    data () {
      const resumeBaseUrl = 'https://dhruvkb.github.io/resume'
      return {
        resumeRepoUrl: 'https://github.com/dhruvkb/resume/',
        resumes: [
          {
            name: 'software developer',
            url: `${resumeBaseUrl}/developer.pdf`,
            shortkey: 'd' // 'd' for Developer
          },
          {
            name: 'technical writer',
            url: `${resumeBaseUrl}/writer.pdf`,
            shortkey: 'w' // 'w' for Writer
          }
        ]
      }
    },
    methods: {
      resumeLinkTitleText (shortkey, name) {
        return `[${shortkey.toLocaleUpperCase()}] See my résumé as a ${name}.`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/styles/tokens/dimensions';
  @import '~@/styles/tokens/sizes';
  @import '~@/styles/tokens/weights';

  @import '~@/styles/utils/media';

  .intro {
    .ascii-art {
      font-size: $size-xs;
      font-weight: $weight-semibold;

      background-color: transparent;

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

    .resume {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: $dimen-line;

      .links {
        display: inline-block;

        margin-left: 1ch;

        .link {
          display: inline-block;

          text-decoration: none;

          margin-right: 1ch;

          $devices: 'phone';
          @include device-specific($devices) {
            display: block;

            margin-bottom: $dimen-xs;
          }
        }
      }
    }
  }
</style>
