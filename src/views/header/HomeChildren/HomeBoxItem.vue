<template>
    <div class="boxItem">
      <a href="">
        <img :src="item.show.img">
        <div>
          <p class="text">{{item.title}}</p>
        </div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "HomeBoxItem",
      props:{
        item:Object
      }
    }
</script>

<style scoped>
  .boxItem{
    width: 50%;
    float: left;
    text-align: center;
  }
  .boxItem img{
    width: 90%;
  }
  .text{
    white-space:nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    line-height: 22px;
    padding: 3px;
  }
</style>
