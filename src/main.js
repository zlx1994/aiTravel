// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueResource from 'vue-resource'
import VueSwiper from 'vue-awesome-swiper'
import Calendar from 'vue2-datepick';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.component(Piker.name,piker)
Vue.use(MintUI)
// import Vux from 'vux'
import 'swiper/dist/css/swiper.css'
// Vue.use(Vux)
Vue.use(Calendar);
Vue.use(VueSwiper)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI,{locale})
/* eslint-disable no-new */
new Vue({
  el: '#app',  
  router,
  components: { App },
  template: '<App/>'
})
