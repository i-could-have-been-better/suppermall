import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  //定义状态
  state:{
    name:'张三'
  },
  //修改
  mutations:{},
  //处理异步请求
  actions:{},
  //相当于计算属性
  getters:{},
  //模块
  modules:{}
})

export default store
