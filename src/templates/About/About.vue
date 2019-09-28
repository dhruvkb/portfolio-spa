<template>
  <div class="about">
    <main>
      <section class="section" id="intro">
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
                I'm
                <span class="red-colored">
                  <strong>Dhruv Bhanushali</strong>
                </span>,
                an engineer-physicist
                from the Indian Institute of Technology
                at Roorkee.
              </p>
              <p>
                I was born in the clamour and the bustle of Mumbai in India.
                Understandably, I tended to cherish silent solitude. That, and
                my introvert personality, means you'll not hear me speak at
                first and not hear the end of it soon after.
              </p>
              <p>
                At an early age, I fell in love with my first computer, my dad's
                self-assembled Pentium III with a chonky CRT running Windows 95.
                Between then and now, with my ThinkPad, there has always been a
                computer no further than an arm's distance from me.
              </p>
            </div>
          </GridCell>
        </Grid>

        <footer>
          <Indicator/>
        </footer>
      </section>

      <section class="section" id="bytes">
        <Heading
          :level="2"
          color="green">
          Byte-sized info
        </Heading>

        <Grid>
          <GridCell
            :span-set="compensatingSpanSet">
            <Card class="quote-card">
              <template #title>
                <Heading
                  class="top"
                  color="orange"
                  :level="6">
                  Favourite quote
                </Heading>
              </template>

              <Blockquote color="orange" orientation="vertical">
                &ldquo;Don't half-ass two things. Whole-ass one thing.&rdquo;
                <template #citation>
                  - Ron Swanson
                </template>
              </Blockquote>
            </Card>
          </GridCell>

          <GridCell :span-set="spanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="blue"
                  :level="6">
                  Birth
                </Heading>
              </template>
              <Heading :level="2">
                <span class="blue-colored">Mumbai, 1996</span>
              </Heading>
            </Card>
          </GridCell>

          <GridCell :span-set="spanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="magenta"
                  :level="6">
                  Current computer
                </Heading>
              </template>
              <Heading :level="2">
                <span class="magenta-colored">ThinkPad X220</span>
              </Heading>
            </Card>
          </GridCell>

          <GridCell
            v-for="(category, index) in topRow"
            :key="`1${index}`"
            :span-set="spanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="cyan"
                  :level="6">
                  {{ category.heading }}
                </Heading>
              </template>

              <Carousel
                class="carousel"
                v-bind="carouselOptions">
                <Slide
                  class="carousel-content"
                  v-for="(item, count) in category.list"
                  :key="count">
                  <span class="cyan-colored">
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

  import Blockquote from '@/components/Blockquote/Blockquote'
  import Card from '@/components/Card/Card'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'

  library.add(
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
        headSpanSet: [12, 6],
        spanSet: [12, 12, 6, 6, 3],
        compensatingSpanSet: [12, 12],
        carouselOptions: {
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 8000,
          loop: true,
          perPage: 1,
          centerMode: true,
          paginationColor: 'var(--background)',
          paginationActiveColor: 'var(--background-opposite)',
          paginationPadding: 4,
          paginationSize: 8
        },
        topRow: [
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
