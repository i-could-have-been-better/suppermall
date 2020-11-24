<template>
  <div class="cart">
    <div class="left">
      <div>
        <p class="image1"></p>
        <p>客服</p>
      </div>
      <div>
        <p class="image2" ></p>
        <p>店铺</p>
      </div>
      <div @click="join">
        <p class="image3" v-bind:class="{join : isjoin}"></p>
        <p>收藏</p>
      </div>
    </div>
    <div class="right">
      <div class="box1">
        <span>加入购物车</span>
      </div>
      <div class="box2">
        <span>购买</span>
      </div>
    </div>




  </div>
</template>

<script>
  import DetailShopCartItem from "./DetailShopCartItem";
    export default {
        name: "DetailShopCart",
      components:{
        DetailShopCartItem
      },
      data(){
          return{
            isjoin:false
          }
      },
      methods:{
        join(){
          this.isjoin = !this.isjoin
        }
      }
    }
</script>

<style scoped>
  .cart{
    display: flex;
    height: 59px;
    background: white;
    align-items: center;
    justify-items: center;
  }
  .cart>div{
    flex: 1;
  }
  .left{
    display: flex;
  }
  .left div{
    flex: 1;
  }
  .right{
    display: flex;
  }
  .right div{
    flex: 1;
  }
  .image1{
    height: 29px;
    width: 29px;
    background-image: url("../../../assets/images/detail/detail_bottom.png") ;
    background-repeat: no-repeat;
    background-position: 0px -72px;
    background-size: 30px;
  }
  .image2{
    height: 29px;
    width: 29px;
    background-image: url("../../../assets/images/detail/detail_bottom.png") ;
    background-position: 0px -135px;
    background-repeat: no-repeat;
    background-size: 30px;
  }

  .image3{
    height: 29px;
    width: 29px;
    background-image: url("../../../assets/images/detail/detail_bottom.png") ;
    background-repeat: no-repeat;
    background-size: 30px;
  }

  .join{
    background-position: 0px -37px;
  }

  .box1{
    width: 100%;
    background: yellow;
    flex: 1.5;
    text-align: center;
    height: 49px;
    line-height: 49px;
  }
  .box2{
    width: 100%;
    height: 49px;
    background: var(--color-high-text);
    flex: 1.5;
    height: 49px;
    text-align: center;
    line-height: 49px;
    color: white;
  }


</style>
