<template>
  <Grid
    class="intro"
    :row-count="2">
    <GridCell
      class="intro-cell"
      :span-set="[12, 6, 6, 6, 6]">
      <Card :color="color">
        <p>
          As a person born in the clamour and the incessant bustle of
          Shanghai, I cherished the silence and solitude I found in the
          tranquil town of Huinan.
        </p>
        <p>
          For High school, I studied at Jianping ECIC which is an AP shool.
          Then I went to New York University, Tandon School of Engineering.
          I have no clue where the next destination is, but I’m always ready to pack my bags.
        </p>
        <p>
          In childhood, I have been training in the school tracking team and playing the piano and guitar.
          After, I earned certificate as fitness trainer and piano/guitar playing. I broke my high school record of shot put in 12th grade.
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
          I'm a Shanghainese at heart…
        </p>
        <div
          class="side-by-side"
          title="阿拉上海!">
            <span class="image" :class="`${color}-colored`">
              <svg class="mumbai" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                <use href="@/assets/svgs/mumbai.svg#mumbai"></use>
              </svg>
            </span>
          <Couplet
            :color="color"
            dom="Shanghai">
            <template #sub>
              <span :class="`${color}-colored`">
                上海
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
          …but I've spent four wonderful years in Brooklyn (well 1st year remote at NYUSH).
        </p>
        <div
          class="side-by-side"
          title="Class of 2024">
            <span class="image" :class="`${color}-colored`">
              <svg class="roorkee" viewBox="0 0 290.626 290.626" xmlns="http://www.w3.org/2000/svg">
                <use href="@/assets/svgs/roorkee.svg#roorkee"></use>
              </svg>
            </span>
          <Couplet
            :color="color"
            dom="NYU Tandon">
            <template #sub>
              <span :class="`${color}-colored`">
                BS. in Applied Mathematics
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
