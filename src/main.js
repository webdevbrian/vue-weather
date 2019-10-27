import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from './components/SvgIcon'
import Container from './components/Container'
import VueButton from './components/VueButton'
import VueLink from './components/VueLink'
import './registerServiceWorker'

const BASE_API_URL = 'https://api.openweathermap.org/data/2.5'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = BASE_API_URL
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'
Vue.axios.defaults.params = {}
// API key
Vue.axios.defaults.params['appid'] = process.env.VUE_APP_WEATHERKEY // Get your own at openweathermap.com

// set default unit type
Vue.axios.defaults.params['units'] = 'imperial'

Vue.component('svg-icon', SvgIcon)
Vue.component('container', Container)
Vue.component('v-button', VueButton)
Vue.component('v-link', VueLink)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
