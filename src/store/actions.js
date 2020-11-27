export default {
  //处理是否添加一件新的商品还是在原有得商品得数量上+1
  isWaresExist(context,payload){
    return new Promise((resolve,reject)=>{

      //购物车物品进行添加，如果物品事一样的话数量+1
      let oldPayload = null;

      for(let item of context.state.waresList){
        //如果有物品的话将其添加
        if (item.iid === payload.iid){
          oldPayload = item
        }
      }
      //这里如果直接处理的话会导致mutations处理的东西过去，这样不利于后期进行维护，需要将其添加到actions里面操作
      //虽然actions主要处理异步函数等操作，也是可以处理复制的逻辑类型的
      if (oldPayload === null){
        //没有这件物品
        payload.count = 1
        context.commit("addCart",payload)
        resolve("商品添加成功")
      }else {
        //有这件物品的时候
        context.commit("addCount",oldPayload)
        resolve("商品数量添加成功")
      }
    })
  }

}
