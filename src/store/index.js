import Vuex from "vuex"
import Vue from 'vue'
//index 中得代码尽量变得清晰需要将给个核心内容进行划分
import mutations from "./mutations";
import actions from "./actions"
import getters from "./getters";

Vue.use(Vuex);


let state = {
  //购物车的物品
  waresList:[]
}

const store = new Vuex.Store({
  //定义状态
  state:{
    waresList:[]
  },
  //修改
  mutations:mutations,
  //处理异步请求
  actions:actions,
  //相当于计算属性
  getters,
  //模块
  modules:{}
})

export default store
