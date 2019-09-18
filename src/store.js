import Vue from 'vue'
import Vuex from 'vuex'

import terminal from './store/modules/terminal'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    terminal
  }
})
