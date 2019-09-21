<template>
  <div class="credits">
    <main>
      <section class="section" id="dedication">
        <p>
          Thank you,
          <span class="blue-colored"><strong>mummy</strong></span>.<br/>
          Thank you,
          <span class="violet-colored"><strong>papa</strong></span>.<br/>
          Thank you,
          <span class="magenta-colored"><strong>Anu</strong></span>.
        </p>
      </section>
      <section class="section" id="inspiration">
        <div class="grid">
          <div class="left pane">
            <Heading
              :level="5"
              color="violet">
              Color scheme
            </Heading>
            <p>
              The color scheme of the site is
              <span class="yellow-colored">S</span>
              <span class="orange-colored">o</span>
              <span class="red-colored">l</span>
              <span class="magenta-colored">a</span>
              <span class="violet-colored">r</span>
              <span class="blue-colored">i</span>
              <span class="cyan-colored">z</span>
              <span class="green-colored">e</span>
              <span class="yellow-colored">d</span>
              by Ethan Schoonover. Solarized has unique features such as
            </p>
            <ul>
              <li>
                a symmetric colour palette
              </li>
              <li>
                both light and dark themes
              </li>
              <li>
                precisely calibrated colours
              </li>
              <li>
                selective contrast for stress-free reading
              </li>
              <li>
                beautiful accent colours
              </li>
            </ul>
          </div>
          <div class="right pane">
            <Heading
              :level="5"
              color="violet">
              Homage
            </Heading>
            <p>
              A lot of awesome people inspired a lot of awesome functionality
              on the site, namely
            </p>
            <ul>
              <li>
                <strong>design</strong>:
                <a href="https://theindianotaku.github.io">Debashish Nayak</a>'s
                porfolio
              </li>
              <li>
                <strong>landing</strong>:
                <a href="https://mohitvirli.github.io">Mohit Virli</a>'s
                portfolio
              </li>
              <li>
                <strong>content</strong>:
                <a href="https://pradumangoyal.github.io">Praduman Goyal</a>'s
                portfolio
              </li>
              <li>
                <strong>terminal</strong>:
                <a href="https://meetvora.github.io">Meet Vora</a>'s
                portfolio
              </li>
            </ul>
            <p>
              Do check them out!
            </p>
          </div>
        </div>
      </section>
      <section class="section" id="old">
        <p>
          My old portfolio, written entirely in vanilla JavaScript is still
          available <a href="https://vjs.dhruvkb.now.sh">here</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
  import Heading from '@/components/Heading/Heading'

  export default {
    name: 'Credits',
    components: {
      Heading
    }
  }
</script>

<style scoped lang="stylus" src="./Credits.styl">
</style>
