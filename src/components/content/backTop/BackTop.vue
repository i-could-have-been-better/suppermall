<template>
<!--  回到顶部按钮 -->
    <div>
      <img src="~assets/images/common/top.png" class="top">
    </div>
</template>

<script>
    export default {
      name: "BackTop",
    }
</script>

<style scoped>
  .top{
    width: 45px ;
    position: fixed;
    right: 20px;
    bottom: 90px;
    z-index: 100;
  }
</style>
