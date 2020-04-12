import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./assets/css/common.css"
import api from "./api"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Tabs from "./components/tabs"
import BackTop from "./components/Backtop"
import "./assets/font/iconfont.css"

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(BackTop)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
