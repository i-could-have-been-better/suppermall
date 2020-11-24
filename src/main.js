import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//Vuex
import store from "./store";


Vue.config.productionTip = false
//实现事件总线
Vue.prototype.$bus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
