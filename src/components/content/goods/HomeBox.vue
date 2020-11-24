<template>
  <div class="box">
    <home-box-item  v-for="item in goodList" :item="item"></home-box-item>
  </div>

</template>

<script>
  import HomeBoxItem from "./HomeBoxItem";
    export default {
      props:{
        goodList:{
          type:Array,
          default:[]
        }
      },
        name: "HomeBox",
      components:{
        HomeBoxItem
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
  }

</style>
