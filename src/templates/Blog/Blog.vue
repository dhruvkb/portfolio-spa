<template>
  <div class="blog">
    <main>
      <section class="section" id="first">
        <Grid>
          <GridCell :span-set="headSpanSet">
            <div class="imagery">
              <Heading
                :level="2"
                color="green">
                <FontAwesomeIcon
                  :icon="['fas', 'pen-fancy']"/>
              </Heading>
              <Heading
                :level="2"
                color="green">
                I ramble!
              </Heading>
            </div>
          </GridCell>
          <GridCell :span-set="headSpanSet">
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

        <footer v-if="posts">
          <Indicator/>
        </footer>
      </section>

      <section class="section" v-if="posts">
        <Heading
          :level="2"
          color="green">
          Latest musings
        </Heading>

        <Grid>
          <GridCell
            v-for="(post, index) in posts"
            :key="post.id"
            :span-set="spanSet(index)">
            <Card>
              <template #title>
                <Heading
                  class="top"
                  :color="accentColor(index)"
                  :level="6">
                  Published {{ timestamp(post.created) }}
                </Heading>
              </template>

              <div class="lefted full-height">
                <Heading
                  :level="3"
                  :color="accentColor(index)">
                  {{ post.title }}
                </Heading>
                <div v-html="post.excerpt">
                </div>
              </div>
              <div class="lefted">
                <a
                  :href="post.url"
                  target="_blank">
                  <FontAwesomeIcon
                    :icon="['fas', 'external-link-alt']"
                    size="xs"
                    fixed-width/>
                  Read more...
                </a>
              </div>
            </Card>
          </GridCell>
        </Grid>
      </section>
    </main>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faPenFancy,
    faExternalLinkAlt,
    faStar
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import moment from 'moment'
  import axios from 'axios'

  import Content from '@/mixins/content'

  import Card from '@/components/Card/Card'
  import Heading from '@/components/Heading/Heading'
  import Indicator from '@/components/Indicator/Indicator'
  import Grid from '@/components/Grid/Grid'
  import GridCell from '@/components/Grid/GridCell'

  library.add(
    faPenFancy,
    faExternalLinkAlt,
    faStar
  )

  export default {
    name: 'Blog',
    mixins: [
      Content
    ],
    components: {
      FontAwesomeIcon,

      Card,
      Grid,
      GridCell,
      Heading,
      Indicator
    },
    data () {
      return {
        url: 'https://api.dhruvkb.now.sh/api/blog',
        posts: null
      }
    },
    methods: {
      timestamp (created) {
        return moment(created).fromNow()
      },
      accentColor (index) {
        const colors = [
          'violet',
          'blue',
          'cyan',
          'green',
          'yellow',
          'orange',
          'red'
        ]
        return colors[index % colors.length]
      },
      spanSet (index) {
        if (index === 0) {
          return [12]
        } else {
          return [12, 12, 12, 6, 6]
        }
      }
    },
    mounted () {
      axios
        .get(this.url)
        .then(response => {
          const { posts } = response.data

          this.posts = posts
        })
        .catch(() => {
          console.log('FAIL')
        })
    }
  }
</script>

<style scoped lang="stylus" src="./Blog.styl">
</style>
