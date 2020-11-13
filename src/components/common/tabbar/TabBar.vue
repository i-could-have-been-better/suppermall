<template>
  <!-- TabBar组件 -->
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style  scoped>
  #tabbar{
    display: flex;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);
  }

</style>