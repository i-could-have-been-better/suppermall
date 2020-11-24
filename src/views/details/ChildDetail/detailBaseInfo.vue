<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">
      <p>{{goods.title}}</p>
    </div>
    <div class="newprice">
      <span>{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span href="#" v-if="goods.discountDesc" >
        <span :style="{background: goods.discountBgColor}">{{goods.discountDesc}}</span>
      </span>

    </div>
    <div class="columns">
      <div v-for="index in goods.columns.length-1">{{goods.columns[index-1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="services">
      <div v-for="index in goods.services.length-1">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "detailBaseInfo",
      props:{
        goods:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      computed:{
        isShow(data){
          return data == "" ? false : true
        }
      }
    }
</script>

<style scoped>
  .title{
    padding: 8px  3px 3px 8px;
    font-size: 20px;
  }
  .newprice{
    padding-top: 10px;
    padding-left: 12px;
  }
  .newprice span:nth-child(1){
    font-size: 26px;
    color: var(--color-high-text);
  }
  .newprice span:nth-child(2){
    display: inline-block;
    margin-left: 3px;
    text-decoration: line-through;
    opacity: .6;
  }
  .newprice span:nth-child(3) span{
    font-size: 16px;
    padding: 5px;
    border-radius: 40px;
    color: white;
    position: relative;
    bottom: 10px;
  }
  .columns{
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 15px;
  }
  .columns div{
    flex: 1;
  }
  .columns div:nth-child(1){
    text-align: left;
    margin-left: 6px;
  }
  .columns div:nth-child(3){
    text-align: right;
    margin-right: 6px;
  }
  .services{
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px #eee solid;
    border-top: 1px #eee solid;
    padding: 18px 10px  13px 10px;

    border-bottom: 3px rgba(100,100,100,.1) solid;

  }
  .services div{
    display: inline-block;
    width: 50%;
    padding-bottom: 5px;
  }
  .services div img{
    width: 16px;
  }
  .services div:nth-child(2) , .services div:nth-child(4){
    text-align: right;
  }

</style>
