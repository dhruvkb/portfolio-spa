<template>
  <div class="home">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="$headSpanSet">
            <div class="imagery">
              <h2 class="green-colored">
                <FontAwesomeIcon
                  :icon="['fas', 'pen-nib']"/>
              </h2>
              <h2 class="green-colored">
                I ramble!
              </h2>
            </div>
          </GridCell>

          <GridCell :span-set="$headSpanSet">
            <div class="content">
              <p>
                Have you wondered what goes on in a developer's head?
              </p>
              <p>
                Regardless of whether you have or have not, you can find that
                out by reading my blog. Here I write on a wide spectrum of
                topics, from my latest bits of learning to how I built something
                cool using them.
              </p>
              <p>
                It's mostly random stuff that developers will likely relate to.
                How about a read?
              </p>
            </div>
          </GridCell>
        </Grid>

        <footer>
          <Indicator/>
        </footer>
      </section>

      <transition name="fade" mode="out-in">
        <section
          v-if="posts"
          key="loaded"
          class="section">
          <Grid>
            <GridCell
              v-for="(post, index) in posts"
              :key="post.id"
              :span-set="spanSet(index)">
              <Preview
                :color="randomizedColors[index]"
                :index="index"
                :post="post"/>
            </GridCell>
          </Grid>
        </section>

        <section
          v-else
          v-observe-visibility="observerOptions"
          key="loading"
          class="centered section">
          <Spinner/>
        </section>
      </transition>
    </main>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPenNib } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Grid from '@/components/grid/Grid'
  import Indicator from '@/components/indicator/Indicator'

  import { Blog } from '@/templates/blog/Blog'
  import Preview from './components/preview/Preview'

  library.add(faPenNib)

  /**
   * This is the landing for the Blogs page. It displays a list of the last
   * few posts published to the blog.
   */
  export default {
    name: 'Home',
    components: {
      FontAwesomeIcon,

      Grid,
      GridCell: Grid.Cell,
      Indicator,

      Spinner: Blog.Spinner,
      Preview
    },
    data () {
      return {
        randomizedColors: this.$getShuffledSolarizedColors(),
        observerOptions: {
          callback: this.visibilityChanged,
          once: true,
          intersection: {
            threshold: 0.6 // Only when more than half space is visible
          }
        }
      }
    },
    computed: {
      ...mapState('blog', [
        'posts'
      ])
    },
    methods: {
      /**
       * Get the number of columns the card for the post should span. Only the
       * first post spans the full width of the page.
       * @param {number} index - the index of the post in the list of posts
       * @returns {Array} the columns to span on different device categories
       */
      spanSet (index) {
        switch (index) {
          case 0:
            return [12, 12, 12, 12, 6]
          case 1:
            return [12, 12, 6, 6, 6]
          case 2:
          case 3:
          case 4:
            return [12, 12, 6, 6, 4]
        }
      },
      /**
       * Load posts only when the person scrolls to the recent posts section.
       * @param {boolean} isVisible - whether the section has become visible
       */
      visibilityChanged (isVisible) {
        if (isVisible) {
          this.getPosts()
        }
      },

      ...mapActions('blog', [
        'getPosts'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./Home.scss">
</style>
