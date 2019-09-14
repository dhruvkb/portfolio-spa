<template>
  <div class="about">
    <main>
      <section class="section" id="intro">
        <Blockquote color="blue" orientation="vertical">
          &ldquo;Don't half-ass two things. Whole-ass one thing.&rdquo;
          <template #citation>
            - Ron Swanson
          </template>
        </Blockquote>
        <div class="content">
          <p>
            I'm <strong>Dhruv Bhanushali</strong>, an engineer-physicist from
            the <strong>Indian Institute of Technology</strong> at Roorkee.
          </p>
          <p>
            I was born in the heart of <strong>Mumbai</strong>. When you do that
            you start to enjoy silent solitude. Couple that with an introvert
            personality and you get me.
          </p>
          <p>
            From an early age, I been in love with computers, so much so that
            working with them is both my career and my wind down. From my dad's
            self-assembled Pentium III with a chonky CRT to the finest ThinkPad
            of it's time, there's always been a computer no further than an
            arm's distance from me.
          </p>
        </div>
      </section>

      <section class="section" id="bites">
        <div class="grid">
          <div class="left pane">
            <Heading
              :level="5"
              color="violet">
              Hobbies
            </Heading>
            <ul>
              <li>Binging on TV series</li>
              <li>Watching movies</li>
              <li>Surfing Reddit</li>
              <li>Organising and listening to music</li>
              <li>Talking long strolls late night or early morning</li>
            </ul>
          </div>

          <div class="right pane">
            <Heading
              :level="5"
              color="violet">
              Opinions
            </Heading>
            <ul>
              <li>Coffee > tea</li>
              <li>Dark theme > light theme</li>
              <li>Mozilla Firefox > Google Chrome</li>
              <li>
                Fedora > any OS <em>but</em>
                iOS > Android
              </li>
              <li>
                ThinkPads > Macbooks <em>but</em>
                iPhones > Pixels
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section" id="favs">
        <div class="grid">
          <div class="left pane">
            <Heading
              :level="5"
              color="violet">
              Favourite TV genres
            </Heading>
            <ul>
              <li>
                Science fiction
                <ul>
                  <li>Westworld</li>
                  <li>Black Mirror</li>
                </ul>
              </li>
              <li>
                Comedy
                <ul>
                  <li>The Office (US)</li>
                  <li>Parks and Recreation</li>
                  <li>Community</li>
                </ul>
              </li>
              <li>
                News satire
                <ul>
                  <li>Last Week Tonight</li>
                  <li>Patriot Act</li>
                </ul>
              </li>
              <li>
                Nature documentaries
                <ul>
                  <li>Planet Earth</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="right pane">
            <Heading
              :level="5"
              color="violet">
              Favourite music genres
            </Heading>
            <ul>
              <li>
                Avant, post and psychedelic rock
                <ul>
                  <li>Sigur Rós</li>
                  <li>Tame Impala</li>
                  <li>M83</li>
                </ul>
              </li>
              <li>
                Indie folk and pop
                <ul>
                  <li>Gregory Alan Isakov</li>
                  <li>George Ezra</li>
                  <li>Tom Rosenthal</li>
                </ul>
              </li>
              <li>
                Mainstream pop
                <ul>
                  <li>Ed Sheeran</li>
                  <li>Coldplay</li>
                </ul>
              </li>
              <li>
                Lo-fi and vaporwave
                <ul>
                  <li>Jack Strauber</li>
                  <li>Joji</li>
                </ul>
              </li>
              <li>
                Electronic
                <ul>
                  <li>EDEN</li>
                  <li>Kero Kero Bonito</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import Heading from '@/components/Heading/Heading'
  import Blockquote from '@/components/Blockquote/Blockquote'

  /**
   * This page describes me in deep, verging on excruciating, detail.
   */
  export default {
    name: 'About',
    components: {
      Blockquote,
      Heading
    }
  }
</script>

<style scoped lang="stylus" src="./About.styl">
</style>
