//混入：
import {throttle,debouce} from "./utils";

export const ImageLoade = {
  data(){
    return{
      ImageLoad:null
    }
  },
  mounted(){
    //防抖动函数得到一个新的函数
    // let recent = debouce(this.$refs.scroll.refresh,300);

    //节流函数得到一个新的函数
    let recent = throttle(this.$refs.scroll.refresh,50);
    //将函数打包
    this.ImageLoad = ()=> {
      //处理图片异步加载无法撑大 better-scroll 的Bug
      //每次出现图片重新加载一次
      recent()
      //防抖动函数
    }
    //接收并处理事件总线：
    this.$bus.$on("imageLoad",this.ImageLoad )
  }
}
