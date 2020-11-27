import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//Vuex
import store from "./store";
//引入toast插件
import toast from "./components/common/toast";

//引入fastclick插件
import fastClick from "fastclick"

fastClick.attach(document.body);

//图片懒加载
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);



Vue.config.productionTip = false
//实现事件总线
Vue.prototype.$bus = new Vue();

//安装插件
Vue.use(toast)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
