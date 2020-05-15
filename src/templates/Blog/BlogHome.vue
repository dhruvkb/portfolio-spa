<template>
  <main>
    <section class="section" id="first">
      <Grid>
        <GridCell :span-set="$headSpanSet">
          <div class="imagery">
            <Heading
              :level="2"
              color="green">
              <FontAwesomeIcon
                :icon="['fas', 'pen-nib']"/>
            </Heading>
            <Heading
              :level="2"
              color="green">
              I ramble!
            </Heading>
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
            <Card>
              <template #title>
                <Heading
                  class="top"
                  :level="6"
                  color="secondary">
                  <FontAwesomeIcon
                    :icon="['fas', 'calendar-day']"
                    fixed-width/>
                  <span :title="absoluteDate(post.created)">
                    {{ relativeDate(post.created) }}
                  </span>
                  <template v-if="post.tags.length">
                    &emsp;
                    <FontAwesomeIcon
                      :icon="['fas', 'hashtag']"
                      fixed-width/>
                    {{ post.tags.join(', ') }}
                  </template>
                </Heading>
              </template>

              <div class="lefted full-height">
                <Heading
                  :level="3"
                  :color="$getSolarizedColor(index)">
                  {{ post.title }}
                </Heading>
                <div v-html="post.excerpt">
                </div>
              </div>
              <div class="lefted">
                <RouterLink
                  :to="{name: 'post', params: {slug: post.slug}}"
                  :title="`Read '${post.title}'.`">
                  Read more…
                  <FontAwesomeIcon
                    :icon="['fas', 'arrow-right']"
                    fixed-width/>
                </RouterLink>
              </div>
            </Card>
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
  import {
    faCalendarDay,
    faHashtag,
    faPenNib,
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import moment from 'moment'

  import Content from '@/mixins/content'

  import Card from '@/components/Card/Card'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'

  import Spinner from './elements/Spinner/Spinner'

  library.add(
    faCalendarDay,
    faHashtag,
    faPenNib,
    faArrowRight
  )

  export default {
    name: 'BlogIntroduction',
    mixins: [
      Content
    ],
    components: {
      FontAwesomeIcon,

      Card,
      Grid,
      GridCell,
      Heading,
      Indicator,

      Spinner
    },
    data () {
      return {
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
      relativeDate (created) {
        return moment(created).fromNow()
      },
      absoluteDate (created) {
        return moment(created).format('Do MMMM, YYYY')
      },

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

<style scoped lang="stylus" src="./BlogHome.styl">
</style>
