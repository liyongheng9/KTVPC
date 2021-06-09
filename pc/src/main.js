import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/animate.min.css'
import VueLazyLoad from 'vue-lazyload'
import VueMarkdown from 'vue-markdown'
import 'github-markdown-css/github-markdown.css'
Vue.use(VueLazyLoad, {
  error: '@/assets.logo.png',
  loading: '@/assets.logo.png'
})
Vue.config.productionTip = false
const Axios = axios.create({
  baseURL: 'http://49.235.93.38:82/index.php',
  // timeout: 8000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

Axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  console.log(err)
})

Axios.interceptors.response.use(function (res) {
  return res.data
}, function (err) {
  console.log(err)
})

Vue.prototype.$http = Axios
Vue.use(ElementUI)
Vue.use(VueMarkdown)
Vue.prototype.$layer = layer(Vue)
Vue.prototype.imgURL = 'http://49.235.93.38:82'
Vue.prototype.http = 'http://49.235.93.38:82'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
