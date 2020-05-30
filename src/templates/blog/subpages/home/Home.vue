<template>
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

  export default {
    name: 'BlogIntroduction',
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
      spanSet (index) {
        if (index === 0) {
          return [12]
        } else {
          return [12, 6, 4]
        }
      },

      visibilityChanged (isVisible) {
        if (isVisible) {
          this.getPosts()
        }
      },

      ...mapActions('blog', [
        'getPosts'
      ])
    },
    mounted () {
    }
  }
</script>

<style scoped lang="stylus" src="./Home.styl">
</style>
