<template>
  <div class="home">
    <main>
      <section>
        <h2 class="green-colored">
          I ramble!
        </h2>

        <div class="intro-text">
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

        <footer>
          <Indicator/>
        </footer>
      </section>

      <transition name="fade" mode="out-in">
        <section
          v-if="posts.length"
          key="loaded">
          <Grid>
            <GridCell
              v-for="(post, index) in posts"
              :key="post.id"
              :span-set="postSpanSet(index)">
              <Preview
                :color="randomizedColors[index]"
                :index="index"
                :post="post"/>
            </GridCell>
          </Grid>
          <footer ref="footer">
            <More/>
          </footer>
        </section>

        <section
          v-else
          v-observe-visibility="observerOptions"
          key="loading"
          class="centered">
          <Spinner/>
        </section>
      </transition>
    </main>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import Grid from '@/components/grid/Grid'
  import Indicator from '@/components/indicator/Indicator'

  import { Blog } from '@/templates/blog/Blog'
  import Preview from './components/preview/Preview'
  import More from './components/more/More'

  /**
   * This is the landing for the Blogs page. It displays a list of the last
   * few posts published to the blog.
   */
  export default {
    name: 'Home',
    components: {
      Grid,
      GridCell: Grid.Cell,
      Indicator,

      Spinner: Blog.Spinner,
      Preview,
      More
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
        'posts',
        'isFetching'
      ])
    },
    watch: {
      isFetching (to, from) {
        if (from && !to) { // Fetching has just ended
          this.scrollToOldestPost()
        }
      }
    },
    methods: {
      /**
       * Get the number of columns the card for the post should span. Only the
       * card for the first post spans the full width of the page.
       * @param {number} index - the index of the post in the list
       * @returns {Array} the columns to span on different device categories
       */
      postSpanSet (index) {
        index %= 5
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
      /**
       * Scroll to the bottom of the previews to show the oldest post.
       */
      scrollToOldestPost () {
        this.$nextTick(() => {
          document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          })
        })
      },

      ...mapActions('blog', [
        'getPosts'
      ])
    }
  }
</script>

<style scoped lang="scss" src="./Home.scss">
</style>
