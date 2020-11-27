//引入模板
import Toast from "./Toast";

const obj = {}

obj.install = function(Vue){
  //不能直接这样用，因为内部直接转成了render函数
  // document.body.appendChild(Toast.$el);
  //1.创建组件构造器
  const toastConstustor = Vue.extend(Toast);

  //2.new得方式,根据组件构造器,可以创建出来一个组件对象
  const toast = new toastConstustor()

  //3.手动挂载一个Dom元素
  toast.$mount(document.createElement("div"))

  //4.toast.$el 挂载到对应得元素上
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast
}

export default obj
