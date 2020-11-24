<template>
  <div id="app">
<!--    防止每次路由销毁-->
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/mainTabBar"
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
