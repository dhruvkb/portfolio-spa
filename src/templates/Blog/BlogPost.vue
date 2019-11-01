<template>
  <main>
    <transition
      name="fade"
      mode="out-in"
      @enter="highlightCode">
      <section
        v-if="post"
        key="loaded"
        class="section">
        <div class="back">
          <RouterLink
            v-shortkey="['b']"
            :to="{name: 'blog'}"
            title="[B] Go to main blog page."
            @shortkey.native="$navigateTo({name: 'blog'})">
            <FontAwesomeIcon
              :icon="['fas', 'arrow-left']"
              fixed-width/>
            All posts
          </RouterLink>
        </div>

        <div class="post">
          <div class="heading">
            <Heading
              :level="2"
              color="green">
              {{ post.title }}
            </Heading>
            <Heading
              :level="6"
              color="secondary">
              <FontAwesomeIcon
                :icon="['fas', 'calendar-day']"
                fixed-width/>
              <span :title="absoluteDate">
                  {{ relativeDate }}
                </span>
              <template v-if="post.tags.length">
                &emsp;
                <FontAwesomeIcon
                  :icon="['fas', 'hashtag']"
                  fixed-width/>
                {{ post.tags.join(', ') }}
              </template>
            </Heading>
          </div>

          <div class="content" v-html="post.body"></div>
        </div>

        <footer>
          <div>
            Read this blog on
            <a
              :href="`${domain}/${post.slug}`">
              Write.as
            </a>
          </div>
        </footer>
      </section>

      <section
        v-else
        key="loading"
        class="centered section">
        <Spinner/>
      </section>
    </transition>
  </main>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowLeft, faCalendarDay, faHashtag } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import moment from 'moment'
  import axios from 'axios'

  import Heading from '@/components/Heading/Heading'

  import Spinner from './elements/Spinner/Spinner'
  import Prism from 'prismjs'
  import '@/styles/prism-override.styl'

  // Also see command 'Concatenate'

  library.add(
    faArrowLeft,
    faCalendarDay,
    faHashtag
  )

  export default {
    name: 'BlogPost',
    components: {
      FontAwesomeIcon,

      Heading,

      Spinner
    },
    data () {
      return {
        url: 'https://api.dhruvkb.now.sh/api/post',
        domain: 'https://dhruvkb.writeas.com',
        post: null
      }
    },
    computed: {
      relativeDate () {
        return moment(this.post.created).fromNow()
      },
      absoluteDate () {
        return moment(this.post.created).format('Do MMMM, YYYY')
      }
    },
    methods: {
      highlightCode () {
        Prism.highlightAll()
      }
    },
    mounted () {
      axios
        .get(this.url, {
          params: {
            slug: this.$route.params.slug
          }
        })
        .then(response => {
          const { post } = response.data

          setTimeout(() => {
            this.post = post
          }, 1000)
        })
        .catch(() => {
          console.log('FAIL')
        })
    }
  }
</script>

<style scoped lang="stylus" src="./BlogPost.styl">
</style>
