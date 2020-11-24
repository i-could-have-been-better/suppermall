<template>
    <tab-bar class="tabbar">
      <TabBarItem path='/home'>
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem  path='/sort'>
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem  path='/cart'>
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem  path='/im'>
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
      </TabBarItem>
    </tab-bar>
</template>
<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
    name:'mainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}

</script>
<style  scoped>

</style>
