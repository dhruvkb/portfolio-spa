<template>
  <div class="contact">
    <main>
      <section>
        <h2 class="green-colored">
          <Icon/>
          Get in touch!
        </h2>

        <div class="intro-text">
          <p>
            So, did you like my
            <RouterLink
              :to="{name: 'portfolio'}"
              title="Enjoyed the terminal?">
              <template>portfolio</template></RouterLink>?
            And did you enjoy my
            <RouterLink
              :to="{name: 'blog'}"
              title="Liked reading my thoughts?">
              <template>blog</template></RouterLink>?
          </p>
          <p>
            Whether you're looking for an developer experienced in building
            solutions, an infrastructure architect to scale your project or
            a technical writer to document your codebase, I can help.
          </p>
          <p>
            Or we could talk over coffee. I really like coffee. Want to
            <RouterLink
              :to="{name: 'about'}"
              title="It's a little personal.">
              <template>learn more</template>
            </RouterLink>
            about me?
          </p>
        </div>

        <footer>
          <Indicator/>
        </footer>
      </section>

      <section>
        <Grid>
          <GridCell :span-set="[12, 6]">
            <Card
              :color="randomizedColors[0]"
              title="Email address">
              <p>
                <FontAwesomeIcon
                  :icon="['fas', 'envelope']"/>
                You can hit me up
                at my email address.
              </p>
              <span :class="`${randomizedColors[0]}-colored`">
                <svg
                  class="email"
                  viewBox="0 0 135.468 16.933"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/svgs/email.svg#email"></use>
                </svg>
              </span>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6]">
            <Card
              :color="randomizedColors[0]"
              title="Phone number">
              <p>
                <FontAwesomeIcon
                  :icon="['fas', 'phone-alt']"/>
                You can call me
                on my phone number.
              </p>
              <span :class="`${randomizedColors[0]}-colored`">
                <svg
                  class="phone"
                  viewBox="0 0 135.468 16.933"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/svgs/phone.svg#phone"></use>
                </svg>
              </span>
            </Card>
          </GridCell>

          <GridCell
            v-for="(category, index) in media"
            :key="index"
            :span-set="mediaSpanSet(index)">
            <Card
              :color="randomizedColors[1]"
              :title="category.heading">
              <div class="stuff">
                <Medium
                  v-for="(item, count) in category.list"
                  v-bind="item"
                  :key="count"/>
              </div>
            </Card>
          </GridCell>
        </Grid>
      </section>
    </main>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCommentDots,
    faEnvelope,
    faPhoneAlt
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faApple,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSpotify,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Card from '@/components/card/Card'
  import Grid from '@/components/grid/Grid'
  import Indicator from '@/components/indicator/Indicator'

  import Medium from './components/medium/Medium'
  import Icon from './components/icon/Icon'

  import media from './data/media.json'

  library.add(
    faCommentDots,
    faEnvelope,
    faPhoneAlt
  )

  library.add(
    faApple,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSpotify,
    faTwitter
  )

  /**
   * This page contains several ways to reach out to me. I do not guarantee if
   * I will reciprocate on any of them.
   */
  export default {
    name: 'Contact',
    components: {
      FontAwesomeIcon,

      Card,
      Grid,
      GridCell: Grid.Cell,
      Indicator,

      Medium,
      Icon
    },
    data () {
      return {
        media,
        randomizedColors: this.$getShuffledSolarizedColors()
      }
    },
    methods: {
      /**
       * Get the number of columns the card for the media should span. Only the
       * card for professional media spans the full width of the page.
       * @param {number} index - the index of the media category in the list
       * @returns {Array} the columns to span on different device categories
       */
      mediaSpanSet (index) {
        if (index === 0) {
          return [12, 12, 4, 4, 4]
        } else {
          return [12, 6, 4, 4, 4]
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Contact.scss">
</style>
