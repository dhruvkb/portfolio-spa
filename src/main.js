import Vue from 'vue'

import '@/worker'

import router from '@/router'
import store from '@/store'
import '@/plugins'

import VueMeta from 'vue-meta'
import VueShortkey from 'vue-shortkey'
import VueObserveVisibility from 'vue-observe-visibility'

import App from '@/app/App'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueShortkey, {
  prevent: ['input', 'textarea']
})
Vue.use(VueObserveVisibility)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('div#app')
