<template>
  <div class="four-oh-four">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="$headSpanSet">
            <div class="imagery">
              <Glitch>
                <h2>{{ $t('404') }}</h2>
              </Glitch>
            </div>
          </GridCell>

          <GridCell :span-set="$headSpanSet">
            <div class="content">
              <p title="I made a funny!">
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
                  :to="{name: 'home'}"
                  title="[H] Go to the homepage.">
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
  import Grid from '@/components/grid/Grid'

  import Glitch from './components/glitch/Glitch'

  export default {
    name: 'FourOhFour',
    components: {
      Grid,
      GridCell: Grid.Cell,

      Glitch
    }
  }
</script>

<style scoped lang="scss" src="./FourOhFour.scss">
</style>

<i18n src="./lang.json">
</i18n>
