<template>
  <div class="about">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="headSpanSet">
            <div class="imagery">
              <Heading
                :level="2"
                color="green">
                <FontAwesomeIcon
                  :icon="['fas', 'hand-peace']"/>
              </Heading>
              <Heading
                :level="2"
                color="green">
                It me!
              </Heading>
            </div>
          </GridCell>

          <GridCell :span-set="headSpanSet">
            <div class="content">
              <p>
                I take it you're interested to know me.
              </p>
              <p>
                In that case, let's start with computers, Since two years into
                this life, there has always been a computer no further than an
                arm's distance from me. What can I say? I just love computers.
              </p>
              <p>
                How about something personal? I was born in the clamour and the
                bustle of Mumbai in India so quite understandably, I cherish
                silence and solitude. And I'm an introvert.
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
          Byte-sized info
        </Heading>

        <Grid>
          <GridCell :span-set="[12, 6, 5, 5, 5]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="violet"
                  :level="6">
                  Home
                </Heading>
              </template>

              <Heading :level="3">
                <span class="violet-colored">
                  <svg class="mumbai" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <use href="@/assets/images/mumbai.svg#mumbai"></use>
                  </svg>
                  Mumbai
                </span>
              </Heading>
              <span class="violet-colored">
                <strong>मुंबई</strong>
              </span>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 7, 7, 7]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="violet"
                  :level="6">
                  Education
                </Heading>
              </template>

              <Heading :level="3">
                <span class="violet-colored">
                  IIT Roorkee
                </span>
              </Heading>
              <span class="violet-colored">
                <strong>B. Tech. (Engineering Physics)</strong>
              </span>
            </Card>
          </GridCell>

          <GridCell
            :span-set="compensatingSpanSet">
            <Card class="quote-card">
              <template #title>
                <Heading
                  class="top"
                  color="blue"
                  :level="6">
                  Favourite quote
                </Heading>
              </template>

              <Blockquote color="blue" orientation="vertical">
                &ldquo;Don't half-ass two things. Whole-ass one thing.&rdquo;
                <template #citation>
                  - Ron Swanson
                </template>
              </Blockquote>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 7, 7, 7]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="cyan"
                  :level="6">
                  Current computer
                </Heading>
              </template>

              <Heading :level="3">
                <span class="cyan-colored">ThinkPad X220</span>
              </Heading>
              <span class="cyan-colored">
                <strong>with the 7 row keyboard</strong>
              </span>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 5, 5, 5]">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="cyan"
                  :level="6">
                  First computer
                </Heading>
              </template>

              <Heading :level="3">
                <span class="cyan-colored">Pentium III</span>
              </Heading>
              <span class="cyan-colored">
                <strong>with a chonky CRT</strong>
              </span>
            </Card>
          </GridCell>

          <GridCell
            v-for="(category, index) in dataPoints"
            :key="`1${index}`"
            :span-set="carouselSpanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="yellow"
                  :level="6">
                  {{ category.heading }}
                </Heading>
              </template>

              <Carousel v-bind="carouselOptions">
                <Slide
                  class="carousel-content"
                  v-for="(item, count) in category.list"
                  :key="count">
                  <span class="yellow-colored">
                    <FontAwesomeIcon
                      class="image"
                      :icon="item.icon"
                      size="2x"
                      fixed-width/>
                  </span>
                  {{ item.text }}
                </Slide>
              </Carousel>
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
    faUniversity,
    faAdjust,
    faFilm,
    faHandPeace,
    faLaptop,
    faMobile,
    faMugHot,
    faMusic,
    faTv,
    faWalking
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faApple,
    faFirefox,
    faRedditAlien,
    faRedhat
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { Carousel, Slide } from 'vue-carousel'

  import Content from '@/mixins/content'

  import Blockquote from '@/components/Blockquote/Blockquote'
  import Card from '@/components/Card/Card'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'

  library.add(
    faUniversity,
    faAdjust,
    faFilm,
    faHandPeace,
    faLaptop,
    faMobile,
    faMugHot,
    faMusic,
    faTv,
    faWalking
  )

  library.add(
    faApple,
    faFirefox,
    faRedditAlien,
    faRedhat
  )

  /**
   * This page describes me in deep, verging on excruciating, detail.
   */
  export default {
    name: 'About',
    mixins: [
      Content
    ],
    components: {
      FontAwesomeIcon,

      Carousel,
      Slide,

      Blockquote,
      Card,
      Grid,
      GridCell,
      Heading,
      Indicator
    },
    data () {
      return {
        carouselSpanSet: [12, 12, 6, 6, 3],
        compensatingSpanSet: [12, 12],
        dataPoints: [
          {
            heading: 'Opinions',
            list: [
              {
                icon: ['fas', 'mug-hot'],
                text: 'Coffee > tea'
              },
              {
                icon: ['fas', 'adjust'],
                text: 'Dark theme > light theme'
              },
              {
                icon: ['fab', 'firefox'],
                text: 'Mozilla Firefox > Google Chrome'
              },
              {
                icon: ['fab', 'redhat'],
                text: 'Fedora > any OS'
              },
              {
                icon: ['fab', 'apple'],
                text: 'iOS > Android'
              }
            ]
          },
          {
            heading: 'Hobbies',
            list: [
              {
                icon: ['fas', 'tv'],
                text: 'Binging on TV series'
              },
              {
                icon: ['fas', 'film'],
                text: 'Watching movies'
              },
              {
                icon: ['fas', 'music'],
                text: 'Organising and listening to music'
              },
              {
                icon: ['fas', 'walking'],
                text: 'Talking long strolls in the dark'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./About.styl">
</style>
