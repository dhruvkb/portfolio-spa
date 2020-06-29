import axios from 'axios'

const state = {
  totalCount: null,
  posts: [],
  isFetching: false
}

const mutations = {
  setTotalCount (state, payload) {
    state.totalCount = payload.totalCount
  },
  setPosts (state, payload) {
    state.posts.push(...payload.posts)
  },
  setIsFetching (state, payload) {
    state.isFetching = payload.isFetching
  }
}

const actions = {
  getPosts ({ commit, state }) {
    const url = 'https://api.dhruvkb.now.sh/api/blog/list'

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
        const { totalCount, posts } = response.data

        setTimeout(() => {
          commit('setPosts', {
            posts
          })
          commit('setTotalCount', {
            totalCount
          })
          commit('setIsFetching', {
            isFetching: false
          })
        }, 1000)
      })
      .catch(() => {
        console.log('FAIL')
        commit('setIsFetching', {
          isFetching: false
        })
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
