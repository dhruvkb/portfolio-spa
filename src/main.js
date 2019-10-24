import Vue from 'vue'

import VueShortkey from 'vue-shortkey'
import VueObserveVisibility from 'vue-observe-visibility'

import VueSolarized from '@/plugins/solarized'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.use(VueShortkey, {
  prevent: ['input', 'textarea']
})
Vue.use(VueObserveVisibility)

Vue.use(VueSolarized)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('div#app')
