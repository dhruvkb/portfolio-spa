<template>
  <Grid
    class="intro"
    :row-count="2">
    <GridCell
      class="intro-cell"
      :span-set="[12, 6, 6, 6, 6]">
      <Card :color="color">
        <p>
          I take it you're interested to know me. So let's start with
          an introduction.
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
        :color="color"
        title="Home">
        <p class="was">
          <Icon
            icon="location"
            :path="icons.location"/>
          I'm a Mumbaikar at heart…
        </p>
        <div
          class="side-by-side"
          title="आमची मुंबई!">
            <span class="image" :class="`${color}-colored`">
              <svg class="mumbai" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                <use href="@/assets/svgs/mumbai.svg#mumbai"></use>
              </svg>
            </span>
          <Couplet
            :color="color"
            dom="Mumbai">
            <template #sub>
              <span :class="`${color}-colored`">
                मुंबई
              </span>
            </template>
          </Couplet>
        </div>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Education">
        <p class="was">
          <Icon
            icon="school"
            :path="icons.school"/>
          …but I've spent four wonderful years in Roorkee.
        </p>
        <div
          class="side-by-side"
          title="Batch of 2019">
            <span class="image" :class="`${color}-colored`">
              <svg class="roorkee" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                <use href="@/assets/svgs/roorkee.svg#roorkee"></use>
              </svg>
            </span>
          <Couplet
            :color="color"
            dom="IIT Roorkee">
            <template #sub>
              <span :class="`${color}-colored`">
                B. Tech. (Engineering Physics)
              </span>
            </template>
          </Couplet>
        </div>
      </Card>
    </GridCell>
  </Grid>
</template>

<script>
  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Icon from '@/components/common/icon/Icon'

  import Couplet from '@/components/about/couplet/Couplet'

  import colored from '@/mixins/colored'

  import location from '@/assets/icons/location.svg'
  import school from '@/assets/icons/school.svg'

  export default {
    name: 'Intro',
    mixins: [
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Icon,

      Couplet
    },
    data () {
      return {
        icons: {
          location,
          school
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Intro.scss"/>
