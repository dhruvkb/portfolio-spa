<template>
  <main id="about">
    <section>
      <h2 class="page-title">
        All about me!
      </h2>

      <Intro :color="shuffledSolarizedColors[0]"/>
      <Professional :color="shuffledSolarizedColors[1]"/>
      <Personal :color="shuffledSolarizedColors[2]"/>
    </section>
  </main>
</template>

<script>
  import Intro from '@/templates/about/partials/intro/Intro'
  import Professional from '@/templates/about/partials/professional/Professional'
  import Personal from '@/templates/about/partials/personal/Personal'

  import descriptions from '@/data/descriptions.json'

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
