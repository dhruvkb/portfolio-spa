<template>
  <Grid class="professional">
    <GridCell :span-set="[12, 6, 12, 12, 12]">
      <Card
        :color="color"
        title="You meant professionally?">
        <p>
          In that case, let's talk about computers, Since I was two there
          has always been a computer no further than an arm's distance
          from me. What can I say? I just love computers for what they can
          do and what I can do with them.
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
        title="Current computer">
        <Couplet
          :color="color"
          dom="ThinkPad X220"
          sub="+ 7 row keyboard"/>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        title="Work computer">
        <Couplet
          :color="color"
          dom="MacBook Pro 2019"
          sub="+ Touch Bar"/>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 6, 4, 4, 4]">
      <Card
        :color="color"
        title="First computer">
        <Couplet
          :color="color"
          dom="Pentium III"
          sub="+ chonky CRT"/>
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
