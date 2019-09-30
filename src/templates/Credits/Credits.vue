<template>
  <div class="credits">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="headSpanSet">
            <div class="imagery">
              <Heading
                :level="2"
                color="green">
                <transition appear name="shift-right">
                  <FontAwesomeIcon
                    class="family"
                    :icon="['fas', 'male']"/>
                </transition>
                <FontAwesomeIcon
                  class="family"
                  size="xs"
                  :icon="['fas', 'child']"
                  fixed-width/>
                <transition appear name="shift-left">
                  <FontAwesomeIcon
                    class="family"
                    :icon="['fas', 'female']"/>
                </transition>
              </Heading>
            </div>
          </GridCell>

          <GridCell :span-set="headSpanSet">
            <div>
              Thank you,
              <span class="blue-colored"><strong>mummy</strong></span>.<br/>
              Thank you,
              <span class="violet-colored"><strong>papa</strong></span>.<br/>
              Thank you,
              <span class="magenta-colored"><strong>Anu</strong></span>.
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
          Thanks
        </Heading>

        <Grid>
          <GridCell :span-set="spanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="violet"
                  :level="6">
                  Color scheme
                </Heading>
              </template>

              <div>This is</div>
              <Heading
                class="solarized"
                :level="3">
                <a href="https://ethanschoonover.com/solarized/">
                  Solarized
                </a>
              </Heading>
              <div>by <strong>Ethan Schoonover</strong></div>
              <div>for your reading pleasure.</div>
            </Card>
          </GridCell>

          <GridCell :span-set="spanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="blue"
                  :level="6">
                  Inspirations
                </Heading>
              </template>

              <p>
                Shoutout to these awesome people<br/>
                whose portfolios inspired parts of mine.
              </p>
              <Carousel v-bind="carouselOptions">
                <Slide
                  class="carousel-content"
                  v-for="(inspiration, index) in inspirations"
                  :key="index">
                  <img
                    class="image"
                    :src="inspiration.imageSource"
                    :alt="inspiration.imageAlternativeText"
                    :title="inspiration.imageAlternativeText"/>
                  <span class="blue-colored">
                    <a :href="inspiration.link">
                      <strong>{{ inspiration.text }}</strong>
                    </a>
                  </span>
                  &ldquo;{{ inspiration.subtext }}&rdquo;
                </Slide>
              </Carousel>
            </Card>
          </GridCell>

          <GridCell :span-set="compensatingSpanSet">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  color="cyan"
                  :level="6">
                  History
                </Heading>
              </template>

              <p class="old-portfolio">
                My old portfolio,
                written entirely in vanilla JavaScript,
                is still available
                <span class="cyan-colored">
                  <a href="https://vjs.dhruvkb.now.sh">
                    <strong>here</strong>
                  </a>
                </span>.
              </p>
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
    faMale,
    faFemale,
    faChild
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { Carousel, Slide } from 'vue-carousel'

  import Content from '@/mixins/content'

  import Card from '@/components/Card/Card'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'

  library.add(faMale, faFemale, faChild)

  export default {
    name: 'Credits',
    mixins: [
      Content
    ],
    components: {
      FontAwesomeIcon,

      Carousel,
      Slide,

      Card,
      Grid,
      GridCell,
      Heading,
      Indicator
    },
    data () {
      return {
        spanSet: [12, 12, 6, 4, 4],
        compensatingSpanSet: [12, 12, 12, 4, 4],
        inspirations: [
          {
            text: 'Debashish Nayak',
            subtext: 'Design',
            imageAlternativeText: 'Debashish Nayak',
            imageSource: 'https://avatars0.githubusercontent.com/u/20753255',
            link: 'https://theindianotaku.github.io'
          },
          {
            text: 'Mohit Virli',
            subtext: 'Landing',
            imageAlternativeText: 'Mohit Virli',
            imageSource: 'https://avatars0.githubusercontent.com/u/11966122',
            link: 'https://mohitvirli.github.io'
          },
          {
            text: 'Praduman Goyal',
            subtext: 'Content',
            imageAlternativeText: 'Praduman Goyal',
            imageSource: 'https://avatars0.githubusercontent.com/u/34851451',
            link: 'https://pradumangoyal.github.io'
          },
          {
            text: 'Meet Vora',
            subtext: 'Terminal',
            imageAlternativeText: 'Meet Vora',
            imageSource: 'https://avatars0.githubusercontent.com/u/5457219',
            link: 'https://meetvora.github.io'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Credits.styl">
</style>
