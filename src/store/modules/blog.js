import Vue from 'vue'

import axios from 'axios'

const apiBase = 'https://api.dhruvkb.now.sh/api/blog_posts'
const apiUrl = (path = '') => `${apiBase}/${path}`

const artificialDelay = 500

const state = {
  isFirstRun: true,
  totalCount: null,
  posts: [],
  contents: {},
  isFetching: false
}

const getters = {
  contentWithSlug: state => slug => {
    let contentInQuestion = null
    if (Object.prototype.hasOwnProperty.call(state.contents, slug)) {
      contentInQuestion = state.contents[slug]
    }

    return contentInQuestion
  }
}

const mutations = {
  setTotalCount (state, payload) {
    state.totalCount = payload.totalCount
  },
  setIsFetching (state, payload) {
    state.isFetching = payload.isFetching
  },
  setIsFirstRun (state, payload) {
    state.isFirstRun = payload.isFirstRun
  },
  pushPosts (state, payload) {
    state.posts.push(...payload.posts)
  },
  pushContent (state, payload) {
    Vue.set(state.contents, payload.slug, payload.content)
  }
}

const actions = {
  fetchPosts ({ commit, state }) {
    const url = apiUrl()

    commit('setIsFetching', {
      isFetching: true
    })

    axios
      .get(url, {
        params: {
          offset: state.posts.length
        }
      })
      .then(response => {
        return new Promise(resolve => setTimeout(() => resolve(response), artificialDelay))
      })
      .then(response => {
        const { totalCount, posts } = response.data

        commit('pushPosts', {
          posts
        })
        commit('setTotalCount', {
          totalCount: totalCount
        })
      })
      .catch(err => {
        console.log('FAIL')
        console.error(err)
      })
      .finally(() => {
        commit('setIsFetching', {
          isFetching: false
        })
      })
  },
  fetchContent ({ commit, state }, payload) {
    const slug = payload.slug

    const url = apiUrl(slug)

    commit('setIsFetching', {
      isFetching: true
    })

    axios
      .get(url)
      .then(response => {
        return new Promise(resolve => setTimeout(() => resolve(response), artificialDelay))
      })
      .then(response => {
        const { attributes, body } = response.data
        const { slug, ...otherAttributes } = attributes

        commit('pushContent', {
          slug,
          content: {
            ...otherAttributes,
            body
          }
        })
      })
      .catch(err => {
        console.log('FAIL')
        console.error(err)
      })
      .finally(() => {
        commit('setIsFetching', {
          isFetching: false
        })
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
