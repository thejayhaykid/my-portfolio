import Vue from 'vue'
import App from './App'
import router from './router'

import 'devicons/css/devicons.css'
import 'font-awesome/css/font-awesome.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
