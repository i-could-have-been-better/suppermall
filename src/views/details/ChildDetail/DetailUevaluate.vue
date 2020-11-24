<template>
    <div class="evaluate">
      <div class="title">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="User" v-for="item in evaluate">
        <div class="User-name">
          <img :src="item.user.avatar">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="content">
          <span>{{item.content}}</span>
        </div>
        <div class="img" v-if="item.images ? true : false">
          <div class="imags" v-for="src in item.images">
            <img :src="src">
          </div>
        </div>
        <div class="style">
          <span class="date">{{item.created | showDate}}</span>
          <span>{{item.style}}</span>
        </div>
      </div>


    </div>
</template>

<script>
  import {newDate} from "common/utils"
    export default {
      props:{
        evaluate:{
          type:Array,
          default:{
            return:[]
          }
        }
      },
      //过滤器
      filters:{
        showDate(value){
          const data = value *1000;
          return newDate(data,"yyyy-MM-dd")
        }
      },
      name: "DetailUevaluate",

    }
</script>

<style scoped>
  .evaluate{
    padding-top: 30px;
    border-top: 3px solid #eeeeee;
    padding-bottom: 30px;
    border-bottom: 5px solid #eeeeee;
  }
  .title{
    line-height: 60px;
    font-size: 18px;
    padding-left: 10px;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
  }
  .title span:nth-child(2){
    float: right;
    padding-right: 10px;
  }
  .User-name{
    text-align: left;
    line-height: 30px;
    height: 40px;
    font-size: 18px;
  }
  .User-name img{
    width: 40px;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 10px;
    margin-right: 20px;

  }
  .content{
    margin-top: 20px;
    margin-left: 10px;
    font-size: 16px;
    line-height: 30px;
  }
  .style{
    padding-left: 10px;
    opacity: .5;
  }
  .img{
    width: 100%;
  }
  .imags{
    width:25%;
    display: inline-block;
  }
  .imags img{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .date{
    margin-right: 10px;
  }


</style>
