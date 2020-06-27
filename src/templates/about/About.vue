<template>
  <div class="about">
    <main>
      <section>
        <h2 class="green-colored">
          <Icon/>
          It's-a me!
        </h2>

        <div class="intro-text">
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

        <footer>
          <Indicator/>
        </footer>
      </section>

      <section>
        <Grid>
          <GridCell :span-set="[12, 6, 5, 5, 5]">
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

          <GridCell :span-set="[12, 6, 7, 7, 7]">
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

          <GridCell :span-set="[12, 12, 4, 4, 4]">
            <Card
              :color="randomizedColors[2]"
              title="Current computer">
              <Couplet
                :class="`${randomizedColors[2]}-colored`"
                dom="ThinkPad X220"
                sub="+ 7 row keyboard"/>
            </Card>
          </GridCell>

          <GridCell
            :span-set="[12, 12, 12, 12, 6]">
            <Card
              :color="randomizedColors[1]"
              title="A favourite quote">
              <Blockquote :color="randomizedColors[1]"/>
            </Card>
          </GridCell>

          <GridCell
            v-for="(category, index) in bio"
            :key="index"
            :span-set="[12, 12, 6, 6, 3]">
            <Card
              :color="randomizedColors[3]"
              :title="category.heading">
              <Carousel v-bind="textCarouselOptions">
                <Slide
                  class="carousel-content"
                  v-for="(item, count) in category.list"
                  :key="count">
                  <span :class="`${randomizedColors[3]}-colored`">
                    <FontAwesomeIcon
                      class="image"
                      :icon="item.icon"
                      size="2x"
                      fixed-width/>
                  </span>
                  <span v-html="item.text"></span>
                </Slide>
              </Carousel>
            </Card>
          </GridCell>

          <GridCell :span-set="[12]">
            <Gallery/>
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

  import Card from '@/components/card/Card'
  import Grid from '@/components/grid/Grid'
  import Indicator from '@/components/indicator/Indicator'

  import Blockquote from './components/blockquote/Blockquote'
  import Couplet from './components/couplet/Couplet'
  import Gallery from './components/gallery/Gallery'
  import Icon from './components/icon/Icon'

  import bio from './data/bio.json'

  library.add(
    faMugHot,
    faTv,
    faFilm,
    faMusic,
    faWalking
  )

  library.add(
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

      Card,
      Grid,
      GridCell: Grid.Cell,
      Indicator,

      Blockquote,
      Couplet,
      Gallery,
      Icon
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
