import Vue from 'vue'
import Vuex from 'vuex'

// Import modules per template
import portfolio from '@/store/modules/portfolio'
import blog from '@/store/modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    portfolio,
    blog
  }
})
