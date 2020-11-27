export default {
  //新的商品
  addCart(state,payload){
    payload.checked = false;
    state.waresList.push(payload)
  },
  //重复商品数量+1
  addCount(state,payload){
    payload.count += 1
  },
  seset(state,obj){
    obj.payload.checked = obj.isCheck;
  }
}
