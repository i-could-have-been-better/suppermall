//请求detail数据
import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid:iid
    }
  })
}

//获取推荐数据
export function getGoods() {
  return request({
    url:'/recommend'
  })
}

