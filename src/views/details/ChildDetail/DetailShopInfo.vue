<template>
    <div class="shopInfo">
      <div class="shopLogo">
        <img :src="shop.shopLogo">
        <span>{{shop.name}}</span>
      </div>
      <div class="shop-content">
        <div class="cSells">
          <div>
            <p>{{getcSells}}万</p>
            <p>总销量</p>
          </div>
          <div>
            <p>{{shop.cGoods}}</p>
            <p>全部宝贝</p>
          </div>

        </div>
        <div class="score">
          <div v-for="item in shop.score">
            <span> {{item.name}}</span>
            <span class="show" v-bind:class="{isbetter:item.isBetter == false}">{{item.score}}</span>
            <span class="showend" v-bind:class="{isbetterend:item.isBetter == false}">{{colorset(item.isBetter)}}</span>
          </div>
        </div>
      </div>
      <div class="linkshop">
        <span>进店逛一逛</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailShopInfo",
      props:{
        shop:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      computed:{
        getcSells(){
          return parseInt(this.shop.cSells / 10000)
        }
      },
      methods:{
        colorset(isBeter){
          return isBeter == true ? '高' : "低"
        }
      }
    }
</script>

<style scoped>
  .shopInfo{
    background-color: white;
  }
  .shopLogo{
    margin: 20px;
    text-align: left;
    display: flex;
    font-size: 18px;
    align-items: center;
  }
  .shopLogo img{ width: 40px; margin-right: 20px}

  .shop-content{
    display: flex;
    text-align: center;
    align-items: center;
  }
  .shop-content>div{
    flex: 1;
  }
  .shop-content>div:nth-child(1){
    border-right: 3px solid #ccc;
  }
  .shop-content .cSells{
    display: flex;
    padding-left: 20px;
  }
  .shop-content .cSells div:nth-child(1){
    font-size: 24px;
    margin-right: 20px;
  }
  .shop-content .cSells p:nth-child(2){
    font-size: 14px;
  }

  .shop-content .cSells div:nth-child(2){
    font-size: 24px;

  }
  .shop-content .cSells p:nth-child(2){
    font-size: 14px;
  }

  .shop-content .score{
    text-align: left;
    margin-left: 20px;

  }
  .shop-content .score div{
    margin-top: 10px;
  }
  .show{
    color: red;
    margin-left: 20px;
  }
  .showend{
    color: white;
    background: red;
    margin-left: 10px;
    float: right;
    display: inline-block;
    margin-right: 10px;
  }
  .isbetter{
    color: green;
   }
  .isbetterend{
    color: white;
    background: green;
  }
  .linkshop{
    text-align: center;
    margin-top: 20px;

  }
  .linkshop span{
    display: inline-block;
    width: 200px;
    border-radius: 20px;
    background-color: #eee;
    padding: 5px;
    margin-bottom: 30px;
  }
</style>
