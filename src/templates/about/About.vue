<template>
  <div class="about">
    <main>
      <section class="new">
        <h2 class="page-title green-colored">
          It's-a me!
        </h2>

        <Grid :row-count="2">
          <GridCell
            class="intro-cell"
            :span-set="[12, 6, 6, 6, 6]">
            <Card :color="randomizedColors[0]">
              <p>
                I take it you're interested to know me. So let's with something
                personal.
              </p>
              <p>
                As an introvert born in the clamour and the incessant bustle of
                Mumbai, I cherished the silence and solitude I found in the
                tranquil town of Roorkee.
              </p>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 6, 6, 6]">
            <Card
              :color="randomizedColors[0]"
              title="Home">
              <div
                :class="['side-by-side', `${randomizedColors[0]}-colored`]"
                title="आमची मुंबई!">
                <span class="icon">
                  <svg class="mumbai" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                    <use href="@/assets/svgs/mumbai.svg#mumbai"></use>
                  </svg>
                </span>
                <Couplet
                  dom="Mumbai"
                  sub="मुंबई"/>
              </div>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 6, 6, 6]">
            <Card
              :color="randomizedColors[0]"
              title="Education">
              <div
                :class="['side-by-side', `${randomizedColors[0]}-colored`]"
                title="Batch of 2019">
                <span class="icon">
                  <svg class="roorkee" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                    <use href="@/assets/svgs/roorkee.svg#roorkee"></use>
                  </svg>
                </span>
                <Couplet
                  :class="`${randomizedColors[0]}-colored`"
                  :dom="$t('iit_roorkee')"
                  :sub="`${$t('b_tech')} (${$t('eph')})`"/>
              </div>
            </Card>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell :span-set="[12, 6, 12, 12, 12]">
            <Card
              :color="randomizedColors[2]"
              title="You meant professionally?">
              <p>
                In that case, let's talk about computers, Since I was two there
                has always been a computer no further than an arm's distance
                from me. What can I say? I just love computers for what they can
                do and what I can do with them.
              </p>
              <RouterLink
                tabindex="0"
                :to="{name: 'portfolio'}">
                <ArrowControl :color="randomizedColors[2]">
                  <template #default>See my portfolio</template>
                  <template #punctuation>…</template>
                </ArrowControl>
              </RouterLink>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 4, 4, 4]">
            <Card
              :color="randomizedColors[2]"
              title="Current computer">
              <div :class="['side-by-side', `${randomizedColors[2]}-colored`]">
                <span class="icon">
                  <svg class="thinkpad" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                    <use href="@/assets/svgs/thinkpad.svg#thinkpad"></use>
                  </svg>
                </span>
                <Couplet
                  :class="`${randomizedColors[2]}-colored`"
                  dom="ThinkPad X220"
                  sub="+ 7 row keyboard"/>
              </div>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 4, 4, 4]">
            <Card
              :color="randomizedColors[2]"
              title="Work computer">
              <Couplet
                :class="`${randomizedColors[2]}-colored`"
                dom="MacBook Pro 2019"
                sub="+ Touch Bar"/>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 6, 4, 4, 4]">
            <Card
              :color="randomizedColors[2]"
              title="First computer">
              <Couplet
                :class="`${randomizedColors[2]}-colored`"
                dom="Pentium III"
                sub="+ chonky CRT"/>
            </Card>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell :span-set="[12, 12, 6, 6, 6]">
            <Card
              :color="randomizedColors[1]"
              title="You meant personally?">
              <p>
                <em>"Manners maketh man."</em> So do opinions and hobbies. Here
                is a sneak peek of just that, so you can know me a little better
                and we can be friends, which will never happen if you use Google
                Chrome.
              </p>
              <RouterLink
                tabindex="0"
                :to="{name: 'contact'}">
                <ArrowControl :color="randomizedColors[1]">
                  <template #default>Drop a message</template>
                  <template #punctuation>…</template>
                </ArrowControl>
              </RouterLink>
            </Card>
          </GridCell>

          <GridCell :span-set="[12, 12, 6, 6, 6]">
            <Card
              :color="randomizedColors[1]"
              title="A favourite quote">
              <Blockquote :color="randomizedColors[1]"/>
            </Card>
          </GridCell>

          <template v-for="(category, index) in bio">
            <GridCell
              v-for="(item, count) in category.list"
              class="personality singleton"
              :key="`singleton-${index}-${count}`"
              :span-set="[3]">
              <Card
                :color="randomizedColors[1]">
                <template #title>
                  <FontAwesomeIcon
                    class="image"
                    :icon="item.icon"
                    size="lg"
                    fixed-width/>
                </template>
                <template #default>
                  <div>
                    <span class="secondary-colored">
                      {{ category.heading }}
                    </span>
                    <span v-html="item.text"/>.
                  </div>
                </template>
              </Card>
            </GridCell>
          </template>

          <GridCell
            v-for="(category, index) in bio"
            class="personality scroller"
            :key="`scroller-${index}`"
            :span-set="[12]">
            <Card
              :color="randomizedColors[1]"
              :title="`${category.heading}…`">
              <Carousel v-bind="textCarouselOptions">
                <Slide
                  class="carousel-content"
                  v-for="(item, count) in category.list"
                  :key="`content-${index}-${count}`">
                  <span :class="`${randomizedColors[1]}-colored`">
                    <FontAwesomeIcon
                      class="image"
                      :icon="item.icon"
                      size="2x"
                      fixed-width/>
                  </span>
                  <span v-html="`…${item.text}.`"></span>
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
    faMugHot,

    faTv,
    faFilm,
    faMusic,
    faWalking
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faFirefox,
    faFedora,
    faApple
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { Carousel, Slide } from 'vue-carousel'

  import carouselled from '@/mixins/carouselled'

  import ArrowControl from '@/components/arrow_control/ArrowControl'
  import Card from '@/components/card/Card'
  import Grid from '@/components/grid/Grid'

  import Blockquote from './components/blockquote/Blockquote'
  import Couplet from './components/couplet/Couplet'

  import bio from './data/bio.json'

  library.add(
    faMugHot,

    faTv,
    faFilm,
    faMusic,
    faWalking,

    faFirefox,
    faFedora,
    faApple
  )

  /**
   * This page describes me in deep, verging on excruciating, detail. If you
   * want to know me, this is a good place to start.
   */
  export default {
    name: 'About',
    components: {
      FontAwesomeIcon,

      Carousel,
      Slide,

      ArrowControl,
      Card,
      Grid,
      GridCell: Grid.Cell,

      Blockquote,
      Couplet
    },
    mixins: [
      carouselled
    ],
    data () {
      return {
        bio,
        randomizedColors: this.$getShuffledSolarizedColors()
      }
    }
  }
</script>

<style scoped lang="scss" src="./About.scss">
</style>

<i18n src="./lang.json">
</i18n>
