<template>
  <div class="intro">
    <div title="This terminal has easter-eggs!">
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
          class="link yellow-colored"
          :href="resume.url"
          target="_blank"
          :title="resumeLinkTitleText(resume.shortkey, resume.name)"
          @shortkey="$navigateOutTo(resume.url)">
          <Icon
            icon="download"
            :path="icons.download"
            is-inline/>
          <span>
            {{ resume.name }}
          </span>
        </a>
        <a
          v-shortkey="['s']"
          class="link yellow-colored"
          :href="resumeRepoUrl"
          target="_blank"
          title="[S] See the LaTeX source code."
          @shortkey="$navigateOutTo(resumeRepoUrl)">
          <Icon
            icon="code"
            :path="icons.code"
            is-inline/>
          <span>
            source LaTeX
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/common/icon/Icon'

  import download from '@/assets/icons/download.svg'
  import code from '@/assets/icons/code.svg'

  /**
   * This command presents the introductory ASCII art.
   */
  export default {
    name: 'Introduction',
    components: {
      Icon
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
        ],
        icons: {
          download,
          code
        }
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
  @use '~@/styles/tokens/colors';
  @use '~@/styles/tokens/devices';
  @use '~@/styles/tokens/dimensions';
  @use '~@/styles/tokens/sizes';
  @use '~@/styles/tokens/weights';

  @use '~@/styles/utils/media';
  @use '~@/styles/utils/gradient-text';

  .intro {
    .ascii-art {
      @include gradient-text.gradient-text;

      font-size: sizes.$xs;
      font-weight: weights.$bold;

      width: fit-content;

      margin: -#{dimensions.$line} 0 0 0;

      &.big {
        @include media.device-specific(devices.$phone) {
          display: none;
        }
      }

      &.small {
        @include media.device-specific(devices.$group-non-phone) {
          display: none;
        }
      }
    }

    .resume {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: dimensions.$line;

      .links {
        display: inline-block;

        margin-left: 1ch;

        .link {
          display: inline-block;

          text-decoration: none;

          margin-right: 1ch;

          @include media.device-specific(devices.$group-non-phone) {
            display: block;

            margin-bottom: dimensions.$xs;
          }

          .icon {
            --stroke-width: 48px; // 24 / 16 * 32px
          }
        }
      }
    }
  }
</style>
