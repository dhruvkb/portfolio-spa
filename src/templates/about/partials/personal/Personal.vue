<template>
  <Grid class="personal">
    <GridCell :span-set="[12, 12, 6, 6, 6]">
      <Card
        :color="color"
        title="You meant personally?">
        <p>
          <em>"Manners maketh man."</em> So do opinions and hobbies. Here
          is a sneak peek of just that, so you can know me a little better
          and we can be friends, which will never happen if you love Chrome/Vue/Java.
        </p>
        <RouterLink
          class="cta"
          tabindex="0"
          :to="{name: 'contact'}"
          @focus.native="handleCtaFocus"
          @blur.native="handleCtaBlur">
          <Pointer
            :color="color"
            :is-focused="isCtaFocused">
            <template #default>Drop a message</template>
          </Pointer>
        </RouterLink>
      </Card>
    </GridCell>

    <GridCell :span-set="[12, 12, 6, 6, 6]">
      <Card
        :color="color"
        title="A favourite quote">
        <Blockquote :color="color"/>
      </Card>
    </GridCell>

    <template v-for="(category, index) in bio">
      <GridCell
        v-for="(item, count) in category.list"
        class="personality singular"
        :key="`singleton-${index}-${count}`"
        :span-set="[3]">
        <Card
          :color="color">
          <template #title>
            <span :class="`${color}-colored`">
              <Icon
                v-if="item.icon"
                :icon="item.icon"
                :path="icons[item.icon]"
                fixed-width/>
              <Repr
                v-if="item.brand"
                :path="paths[item.brand]"/>
            </span>
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
      class="personality plural"
      :key="`scroller-${index}`"
      :span-set="[12]">
      <Card
        :color="color"
        :title="`${category.heading}…`">
        <Bio
          v-for="(item, count) in category.list"
          :key="`content-${index}-${count}`"
          :color="color"
          :icon="item.icon"
          :path="paths[item.brand] || icons[item.icon]">
          <span v-html="`…${item.text}.`"/>
        </Bio>
      </Card>
    </GridCell>
  </Grid>
</template>

<script>
  import { path as fedora } from 'simple-icons/icons/fedora'
  import { path as safari } from 'simple-icons/icons/safari'
  import { path as apple } from 'simple-icons/icons/apple'

  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Icon from '@/components/common/icon/Icon'
  import Repr from '@/components/common/repr/Repr'
  import Pointer from '@/components/common/pointer/Pointer'

  import Bio from '@/components/about/bio/Bio'
  import Blockquote from '@/components/about/blockquote/Blockquote'

  import actionable from '@/mixins/actionable'
  import colored from '@/mixins/colored'

  import bio from '@/data/bio.json'

  import coffee from '@/assets/icons/coffee.svg'
  import tv from '@/assets/icons/tv.svg'
  import film from '@/assets/icons/film.svg'
  import music from '@/assets/icons/music.svg'
  import walk from '@/assets/icons/walk.svg'

  export default {
    name: 'Personal',
    mixins: [
      actionable,
      colored
    ],
    components: {
      Card,
      Grid,
      GridCell: Grid.Cell,

      Icon,
      Repr,
      Pointer,

      Bio,
      Blockquote
    },
    data () {
      return {
        bio,
        paths: {
          fedora,
          safari,
          apple
        },
        icons: {
          coffee,
          tv,
          film,
          music,
          walk
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./Personal.scss"/>
