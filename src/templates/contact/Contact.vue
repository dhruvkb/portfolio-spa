<template>
  <div class="contact">
    <main>
      <section class="new">
        <h2 class="page-title green-colored">
          Get in touch!
        </h2>

        <Grid :row-count="2">
          <GridCell
            class="intro-cell"
            :span-set="[12, 6, 6, 6, 6]">
            <Card :color="randomizedColors[0]">
              <p>
                Whether you're looking for an developer experienced in building
                solutions, an infrastructure architect to scale your project or
                a technical writer to document your codebase, I can help.
              </p>
              <p>
                I could bring the frugal, refined, and very Indian, concept of
                <a href="https://www.lexico.com/en/definition/jugaad">
                  <em>"jugaad"</em>
                </a>
                to the table.
              </p>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 6, 6, 6]">
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
                  viewBox="0 0 450 61"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/svgs/email.svg#email"></use>
                </svg>
              </span>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 6, 6, 6]">
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
                  viewBox="0 0 361 61"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/svgs/phone.svg#phone"></use>
                </svg>
              </span>
            </Card>
          </GridCell>
        </Grid>

        <Grid>
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

        <Grid>
          <GridCell
            class="tall-image"
            :span-set="[6, 6, 4, 4, 4]">
            <Photo
              :src="images.verticalImg"
              alt="No plans to dive in"
              :vertical-aspect="16/10"/>
          </GridCell>

          <GridCell
            class="say-hi"
            :span-set="[12, 6, 8, 8, 8]">
            <Card
              :color="randomizedColors[2]"
              title="Say 'Hi!'">
              <p>
                I would absolutely love to connect with you. Being the introvert
                I am, I shy away from initiating conversations but if you take
                the initiative, I'll be more than happy to reciprocate!
              </p>
              <p>
                We could talk over coffee. I love coffee.
              </p>
              <RouterLink
                tabindex="0"
                :to="{name: 'about'}">
                <ArrowControl :color="randomizedColors[2]">
                  <template #default>Know me better</template>
                  <template #punctuation>!</template>
                </ArrowControl>
              </RouterLink>
            </Card>
          </GridCell>

          <GridCell :span-set="[6, 6, 4, 4, 4]">
            <Photo
              :src="images.horizontalImgs[0]"
              alt="A view of the mountains"
              :vertical-aspect="10/16"/>
          </GridCell>

          <GridCell :span-set="[6, 12, 4, 4, 4]">
            <Photo
              :src="images.horizontalImgs[1]"
              alt="Discovering an abandoned kennel"
              :vertical-aspect="10/16"/>
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
    faGithub,
    faLinkedin,

    faFacebook,
    faInstagram,
    faTwitter,

    faApple,
    faSpotify
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import ArrowControl from '@/components/arrow_control/ArrowControl'
  import Card from '@/components/card/Card'
  import Grid from '@/components/grid/Grid'

  import Medium from './components/medium/Medium'
  import Photo from './components/photo/Photo'

  import media from './data/media.json'

  import verticalImg from '@/assets/photos/vertical.jpg'
  import horizontalOneImg from '@/assets/photos/horizontal_one.jpg'
  import horizontalTwoImg from '@/assets/photos/horizontal_two.jpg'

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

      ArrowControl,
      Card,
      Grid,
      GridCell: Grid.Cell,

      Medium,
      Photo
    },
    data () {
      return {
        media,
        randomizedColors: this.$getShuffledSolarizedColors(),
        images: {
          verticalImg,
          horizontalImgs: [
            horizontalOneImg,
            horizontalTwoImg
          ]
        }
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
