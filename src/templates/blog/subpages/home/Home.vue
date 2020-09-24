<template>
  <div id="blog--home">
    <section>
      <h2 class="page-title">
        I ramble!
      </h2>

      <Grid class="blog-home-grid">
        <div class="left">
          <Card
            class="content"
            :color="shuffledSolarizedColors[0]">
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
          </Card>
        </div>

        <div class="right">
          <div class="content">
            <template v-if="isFetching && !posts.length">
              <div class="centered">
                <Spinner/>
              </div>
            </template>
            <template v-else>
              <Preview
                v-for="(post, index) in posts"
                :key="post.id"
                :color="shuffledSolarizedColors[index]"
                :index="index"
                :post="post"/>
              <More/>
            </template>
          </div>
        </div>
      </Grid>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  import Card from '@/components/layout/card/Card'
  import Grid from '@/components/layout/grid/Grid'

  import Spinner from '@/components/blog/spinner/Spinner'
  import Preview from '@/components/blog/preview/Preview'
  import More from '@/components/blog/more/More'

  /**
   * This is the landing for the Blogs page. It displays a list of the last
   * few posts published to the blog.
   */
  export default {
    name: 'Home',
    components: {
      Card,
      Grid,

      Spinner,
      Preview,
      More
    },
    computed: {
      ...mapState('blog', [
        'posts',
        'isFetching',
        'isFirstRun'
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

      ...mapMutations('blog', [
        'setIsFirstRun'
      ]),
      ...mapActions('blog', [
        'fetchPosts'
      ])
    },
    created () {
      if (this.isFirstRun) {
        // Populate posts
        this.fetchPosts()

        // Indicate first run to be complete
        this.setIsFirstRun({
          isFirstRun: false
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./Home.scss"/>
