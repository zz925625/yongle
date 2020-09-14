import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style/reset.css";
// import "@/swipe/swipe.js";
import '@/filter/header'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/swiper-bundle.css'
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
