<template>
  <main id="contact">
    <section>
      <h2 class="page-title">
        Get in touch!
      </h2>

      <Intro :color="shuffledSolarizedColors[0]"/>
      <Social :color="shuffledSolarizedColors[1]"/>
      <Hi :color="shuffledSolarizedColors[2]"/>
    </section>
  </main>
</template>

<script>
  import Intro from '@/templates/contact/partials/intro/Intro'
  import Social from '@/templates/contact/partials/social/Social'
  import Hi from '@/templates/contact/partials/hi/Hi'

  import descriptions from '@/data/descriptions.json'

  /**
   * This page contains several ways to reach out to me. I do not guarantee if
   * I will reciprocate on any of them.
   */
  export default {
    name: 'Contact',
    metaInfo: {
      title: 'Contact',
      meta: ['description', 'og:description'].map(name => ({
        name,
        content: descriptions.contact
      }))
    },
    components: {
      Social,
      Intro,
      Hi
    }
  }
</script>

<style scoped lang="scss" src="./Contact.scss"/>
