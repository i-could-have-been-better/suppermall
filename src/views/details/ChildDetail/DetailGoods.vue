<template>
  <div class="detailGoods" v-if="Object.keys(goodShop).length != 0">
    <div class="info">
      <div class="left">
        <span class="box"></span>
        <span></span>
      </div>
      <br>
      <p class="info-text">
        新款上市~
      </p>
      <div class="right">
        <span class="box"></span>
        <span></span>
      </div>
      <br>
      <p class="info-end">穿着效果</p>
    </div>
    <div class="shopImage">
      <div class="image" v-for="item in goodShop.detailImage[0].list">
        <img :src="item" @load="imageLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailGoods",
      props:{
        goodShop:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
        return{
          count:0,
          imageslength:0
        }
      },
      methods:{
        imageLoad(){
          //处理发送频繁
          this.count +=  1;
          this.$emit("imageload");

        }
      },
    }
</script>

<style scoped>
  .detailGoods{
    width: 100%;
    padding-top: 30px;
    border-top: 5px solid #eee;
    padding-bottom: 30px;
  }
  .shopImage{
    width: 100%;
   }
  .image img
  {
    width: 100%;
  }


  .info{
    padding: 10px;
  }

  .info .left span:nth-child(1){
    display: inline-block;
    width: 8px;
    height: 8px;
    background: black;
  }
  .info .left span:nth-child(2){
    display: inline-block;
    height: 5px;
    width: 100px;
    border-bottom: 3px solid #ccc;
  }

  .info .right span:nth-child(2){
    display: inline-block;
    width: 8px;
    height: 8px;
    background: black;
  }
  .info .right span:nth-child(1){
    display: inline-block;
    height: 5px;
    width: 100px;
    border-bottom: 3px solid #ccc;
  }

  .info-text{
    padding: 10px;
    text-align: left;
    font-size: 16px;
  }
  .info-end{
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 20px;
  }
</style>
