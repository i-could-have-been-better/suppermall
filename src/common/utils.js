//防抖动函数
export  function debouce(func,delay){
  let timer = null
  return function (...arge) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      func.apply(this,...arge)
    },delay)
  }
}
//节流函数
export  function  throttle(func,throdelay) {
  let start = new Date()
  throdelay = throdelay || 160
  let timerout = null
  return function (...arge) {
    var curr = new Date() - 0;

    clearTimeout(timerout)

    if (curr - start >= throdelay) {
      start = curr;
      func.apply(this, ...arge)
    } else {
      timerout = setTimeout(() => {
        func.apply(this, ...arge)
      }, throdelay)
    }
  }
}

//暴露一个类
//基本信息
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services
  }
}
//店铺图片信息
export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods
  }
}

//获取尺码等信息
export class itemParams {
  constructor(info,rule) {
    this.info = info.set;
    this.tables = rule.tables;
  }
}

//处理时间戳
export  function newDate(data,fmt) {
  if(!data) return "";
  var timeStr = new Date(parseInt(data));
  var fmt = fmt || "yyyy-MM-dd hh:mm:ss";
  var o = {
    "M+": timeStr.getMonth() + 1, //月份
    "d+": timeStr.getDate(), //日
    "h+": timeStr.getHours(), //小时
    "m+": timeStr.getMinutes(), //分
    "s+": timeStr.getSeconds(), //秒
    "q+": Math.floor((timeStr.getMonth() + 3) / 3), //季度
    "S": timeStr.getMilliseconds() //毫秒
  };
  // 如果 fmt 中有y,fmt中y替换为timeStr.getFullYear()，例：
  // yyyy-MM-dd hh:mm:ss 替换为 2018-MM-dd hh:mm:ss
  // yy-MM-dd hh:mm:ss 替换为 18-MM-dd hh:mm:ss
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (timeStr.getFullYear() + "").substr(4 - RegExp.$1.length));
  // 下面循环原理同上
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt =
      fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
