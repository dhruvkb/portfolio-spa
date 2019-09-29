<template>
  <div class="contact">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="headSpanSet">
            <div class="imagery">
              <Heading
                :level="2"
                color="green">
                <FontAwesomeLayers>
                  <FontAwesomeIcon
                    class="plain icon"
                    :icon="['fas', 'comment']"
                    fixed-width/>
                  <FontAwesomeIcon
                    :icon="['fas', 'comment-dots']"
                    fixed-width/>
                </FontAwesomeLayers>
              </Heading>
              <Heading
                :level="2"
                color="green">
                Get in touch!
              </Heading>
            </div>
          </GridCell>

          <GridCell :span-set="headSpanSet">
            <div class="content">
              <p>
                So, did you like my
                <RouterLink
                  to="/portfolio"
                  title="Enjoyed the terminal?">
                  <template>portfolio</template>
                </RouterLink>
                ?
              </p>
              <p>
                Whether you're looking for an developer experienced in building
                solutions, an infrastructure architect to scale your project or
                a technical writer to document your codebase, I can help.
              </p>
              <p>
                Or we could talk over coffee. I really like coffee. Want to
                <RouterLink
                  to="/about"
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
        <Heading
          :level="2"
          color="green">
          Let's talk
        </Heading>

        <Grid>
          <GridCell :span-set="[12, 6]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="violet"
                  :level="6">
                  Email address
                </Heading>
              </template>

              <p>
                You can hit me up at my email address.
              </p>
              <span class="violet-colored">
                <svg
                  class="email"
                  viewBox="0 0 135.468 16.933"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/images/email.svg#email"></use>
                </svg>
              </span>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="violet"
                  :level="6">
                  Phone number
                </Heading>
              </template>

              <p>
                You can call me on my phone number.
              </p>
              <span class="violet-colored">
                <svg
                  class="phone"
                  viewBox="0 0 135.468 16.933"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Would you tell me when OCR can read cursive?</title>
                  <use href="@/assets/images/phone.svg#phone"></use>
                </svg>
              </span>
            </Card>
          </GridCell>

          <GridCell
            v-for="(category, index) in medias"
            :key="index"
            :span-set="[12, 6, 4, 4, 4]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="blue"
                  :level="6">
                  {{ category.name }}
                </Heading>
              </template>

              <div class="lefted">
                <p
                  v-for="(medium, index) in category.list"
                  :key="index">
                  <FontAwesomeIcon
                    class="image"
                    :icon="['fab', medium.icon]"
                    fixed-width/>
                  <template>&nbsp;</template>
                  <a :href="medium.link">
                    <strong>{{ medium.name }}</strong>
                  </a>
                </p>
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
    faComment,
    faCommentDots
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faGithub,
    faLinkedin,
    faFacebookF,
    faTwitter,
    faApple
  } from '@fortawesome/free-brands-svg-icons'
  import {
    FontAwesomeIcon,
    FontAwesomeLayers
  } from '@fortawesome/vue-fontawesome'

  import Content from '@/mixins/content'

  import Card from '@/components/Card/Card'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'

  library.add(
    faComment,
    faCommentDots
  )

  library.add(
    faGithub,
    faLinkedin,
    faFacebookF,
    faTwitter,
    faApple
  )

  export default {
    name: 'Contact',
    mixins: [
      Content
    ],
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers,

      Card,
      Grid,
      GridCell,
      Heading,
      Indicator
    },
    data () {
      return {
        medias: [
          {
            name: 'Professional media',
            list: [
              {
                icon: 'github',
                name: 'GitHub',
                link: 'https://github.com/dhruvkb'
              },
              {
                icon: 'linkedin',
                name: 'LinkedIn',
                link: 'https://linkedin.com/in/dhruvkb'
              }
            ]
          },
          {
            name: 'Social media',
            list: [
              {
                icon: 'facebook-f',
                name: 'Facebook',
                link: 'https://facebook.com/dhruv.k.bhanushali'
              },
              {
                icon: 'twitter',
                name: 'Twitter',
                link: 'https://twitter.com/dhruvkb'
              }
            ]
          },
          {
            name: 'Music streaming',
            list: [
              {
                icon: 'apple',
                name: 'Apple Music',
                link: 'https://itunes.apple.com/profile/dhruvkb'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Contact.styl">
</style>
