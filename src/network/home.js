//home界面中的请求参数
import {request} from "./request";

export function getHomeMultidata() {

  return request({
    url:'/home/multidata'
  })
}

export function getGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page
    }
  })
}
