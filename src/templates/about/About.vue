<template>
  <div class="about">
    <main>
      <section class="new">
        <h2 class="page-title green-colored">
          It's-a me!
        </h2>

        <Intro :color="shuffledSolarizedColors[0]"/>
        <Professional :color="shuffledSolarizedColors[1]"/>
        <Personal :color="shuffledSolarizedColors[2]"/>
      </section>
    </main>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faFirefoxBrowser,
    faFedora,
    faApple
  } from '@fortawesome/free-brands-svg-icons'

  import Intro from '@/templates/about/partials/intro/Intro'
  import Professional from '@/templates/about/partials/professional/Professional'
  import Personal from '@/templates/about/partials/personal/Personal'

  import descriptions from '@/data/descriptions.json'

  library.add(
    faFirefoxBrowser,
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
      Intro,
      Professional,
      Personal
    },
    metaInfo: {
      title: 'About',
      meta: ['description', 'og:description'].map(name => ({
        name,
        content: descriptions.about
      }))
    }
  }
</script>

<style scoped lang="scss" src="./About.scss"/>
