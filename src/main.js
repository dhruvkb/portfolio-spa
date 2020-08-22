import Vue from 'vue'

import '@/worker'

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
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
  i18n,
  render: h => h(App)
}).$mount('div#app')
