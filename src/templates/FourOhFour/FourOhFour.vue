<template>
  <div class="four-oh-four">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="headSpanSet">
            <div class="imagery">
              <Glitch>404</Glitch>
            </div>
          </GridCell>
          <GridCell :span-set="headSpanSet">
            <div class="content">
              <p>
                You're lost, aren't you?<br/>
                Hi <em>lost</em>,
                I'm <strong><span class="red-colored">Dhruv</span></strong>.
              </p>
              <p>
                While I do not apologise for that joke, I do apologise for the
                circumstances that brought you here. Did you mistype a URL?
              </p>
              <p>
                Please make yourself at
                <RouterLink
                  :to="{name: 'home'}">
                  <template>home</template>
                </RouterLink>
                and since you're here, do explore using the navigation above.
              </p>
            </div>
          </GridCell>
        </Grid>
      </section>
    </main>
  </div>
</template>

<script>
  import Content from '@/mixins/content'

  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'
  import Glitch from '@/templates/FourOhFour/elements/Glitch/Glitch'

  export default {
    name: 'FourOhFour',
    mixins: [
      Content
    ],
    components: {
      Glitch,
      Grid,
      GridCell
    }
  }
</script>

<style scoped lang="stylus" src="./FourOhFour.styl">
</style>
