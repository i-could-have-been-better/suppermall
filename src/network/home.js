//home界面中的请求参数
import {request} from "./request";

//请求轮播图
export function getHomeMultidata() {

  return request({
    url:'/home/multidata'
  })
}
//请求goods数据
export function getGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page
    }
  })
}
