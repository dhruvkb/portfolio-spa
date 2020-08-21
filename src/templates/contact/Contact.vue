<template>
  <div class="contact">
    <main>
      <section class="new">
        <h2 class="page-title green-colored">
          Get in touch!
        </h2>

        <Intro :color="shuffledSolarizedColors[0]"/>
        <Social :color="shuffledSolarizedColors[1]"/>
        <Hi :color="shuffledSolarizedColors[2]"/>
      </section>
    </main>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faGithub,
    faLinkedin,

    faFacebook,
    faInstagram,
    faTwitter,

    faApple,
    faSpotify
  } from '@fortawesome/free-brands-svg-icons'

  import Intro from '@/templates/contact/partials/intro/Intro'
  import Social from '@/templates/contact/partials/social/Social'
  import Hi from '@/templates/contact/partials/hi/Hi'

  library.add(
    faApple,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSpotify,
    faTwitter
  )

  /**
   * This page contains several ways to reach out to me. I do not guarantee if
   * I will reciprocate on any of them.
   */
  export default {
    name: 'Contact',
    components: {
      Social,
      Intro,
      Hi
    }
  }
</script>

<style scoped lang="scss" src="./Contact.scss"/>
