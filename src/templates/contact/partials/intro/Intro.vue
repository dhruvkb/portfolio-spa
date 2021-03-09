<template>
  <Grid
    class="intro"
    :row-count="2">
    <GridCell
      class="intro-cell"
      :span-set="[12, 6, 6, 6, 6]">
      <Card :color="color">
        <p>
          Whether you're looking for a developer experienced in building
          solutions, an cloud architect to scale your project or
          a technical writer to document your codebase...I can help.
        </p>
        <p>
          I could bring the refined concept of
          <a href="https://www.lexico.com/en/definition/excellence">
            <em>"excellence"</em>
          </a>
          to the table.
        </p>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Card
        :color="color"
        title="Email address">
        <p class="can">
          <Icon
            icon="inbox"
            :path="icons.inbox"/>
          You can hit me up at my email address…
        </p>
        <span :class="`${color}-colored`">
          <svg
            class="medium"
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
        :color="color"
        title="Phone number">
        <p class="can">
          <Icon
            icon="phone"
            :path="icons.phone"/>
          …or you can call me on my phone.
        </p>
        <span :class="`${color}-colored`">
          <svg
            class="medium"
            viewBox="0 0 361 61"
            xmlns="http://www.w3.org/2000/svg">
            <title>Would you tell me when OCR can read cursive?</title>
            <use href="@/assets/svgs/phone.svg#phone"></use>
          </svg>
        </span>
      </Card>
    </GridCell>
  </Grid>
</template>

<script>
  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Icon from '@/components/common/icon/Icon'

  import colored from '@/mixins/colored'

  import inbox from '@/assets/icons/inbox.svg'
  import phone from '@/assets/icons/phone.svg'

  export default {
    name: 'Intro',
    mixins: [
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Icon
    },
    data () {
      return {
        icons: {
          inbox,
          phone
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Intro.scss"/>
