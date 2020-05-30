<template>
  <div class="contact">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="$headSpanSet">
            <div class="imagery">
              <h2 class="green-colored">
                <transition appear name="spin">
                  <FontAwesomeLayers
                    class="pulse">
                    <FontAwesomeIcon
                      :icon="['fas', 'comment']"/>
                    <FontAwesomeIcon
                      v-for="index in 3"
                      :key="index"
                      class="dot"
                      :data-pos="index"
                      :icon="['fas', 'circle']"
                      size="xs"/>
                  </FontAwesomeLayers>
                </transition>
              </h2>
              <h2 class="green-colored">
                Get in touch!
              </h2>
            </div>
          </GridCell>

          <GridCell :span-set="$headSpanSet">
            <div class="content">
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
          </GridCell>
        </Grid>

        <footer>
          <Indicator/>
        </footer>
      </section>

      <section class="section">
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
            :span-set="[12, 6, 4, 4, 4]">
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
    faCircle,
    faComment,
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
  import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

  import Card from '@/components/card/Card'
  import Grid from '@/components/grid/Grid'
  import Indicator from '@/components/indicator/Indicator'

  import Medium from './components/medium/Medium'

  import media from './data/media.json'

  library.add(
    faComment,
    faCircle,
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

  export default {
    name: 'Contact',
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers,

      Card,
      Grid,
      GridCell: Grid.Cell,
      Indicator,

      Medium
    },
    data () {
      return {
        media,
        randomizedColors: this.$getShuffledSolarizedColors()
      }
    }
  }
</script>

<style scoped lang="scss" src="./Contact.scss">
</style>
