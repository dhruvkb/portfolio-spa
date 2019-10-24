import axios from 'axios'

const state = {
  posts: null
}

const mutations = {
  setPosts (state, payload) {
    state.posts = payload.posts
  }
}

const actions = {
  getPosts ({ commit }) {
    const url = 'https://api.dhruvkb.now.sh/api/blog'

    axios
      .get(url)
      .then(response => {
        const { posts } = response.data

        setTimeout(() => {
          commit('setPosts', {
            posts
          })
        }, 1000)
      })
      .catch(() => {
        console.log('FAIL')
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
