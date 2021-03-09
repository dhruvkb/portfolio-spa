<template>
  <Grid class="professional">
    <GridCell :span-set="[12, 6, 12, 12, 12]">
      <Card
        :color="color"
        title="You meant professionally?">
        <p>
          Let's talk about the tech equipment. Since I was only a child, there
          has always been a computer no further than an arm's distance
          from me. I just love computers for what they can do and what I can do with them.
        </p>
        <RouterLink
          class="cta"
          tabindex="0"
          :to="{name: 'portfolio'}"
          @focus.native="handleCtaFocus"
          @blur.native="handleCtaBlur">
          <Pointer
            :color="color"
            :is-focused="isCtaFocused">
            <template #default>See my portfolio</template>
          </Pointer>
        </RouterLink>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        title="Everyday PC">
        <Couplet
          :color="color"
          dom="MacBook Pro M1"
          sub="+ Touchbar"/>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        title="Home PC">
        <Couplet
          :color="color"
          dom="MacBook Pro M1"
          sub="+ GK64S Keyboard"/>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        title="First PC">
        <Couplet
          :color="color"
          dom="Sony Vaio 2008"
          sub="+ unknown keyboard"/>
      </Card>
    </GridCell>
  </Grid>
</template>

<script>
  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Pointer from '@/components/common/pointer/Pointer'

  import Couplet from '@/components/about/couplet/Couplet'

  import actionable from '@/mixins/actionable'
  import colored from '@/mixins/colored'

  export default {
    name: 'Professional',
    mixins: [
      actionable,
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Pointer,

      Couplet
    }
  }
</script>

<style scoped lang="scss" src="./Professional.scss"/>
