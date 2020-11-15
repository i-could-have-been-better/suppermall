<template>
    <div id="home">
      <nav-bar id="navBar">
        <div slot="center">
          <span>购物街</span>
        </div>
      </nav-bar>
      <mian-siper v-bind:banners="banners"></mian-siper>
      <recommend v-bind:recommend="recommends"></recommend>
      <feature-view></feature-view>

      <tab-comtrol :title="['流行','新款','精选']" class="comtrol"></tab-comtrol>

      <home-box>
        <home-box-item v-for="item in goods.pop" :item="item"></home-box-item>
      </home-box>


      <ul>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
        <li>罗德拉</li>
      </ul>

    </div>
</template>
<script>
  import MianSiper from "./HomeChildren/MianSiper";
  import Recommend from "./HomeChildren/Recommend";
  import FeatureView from "./HomeChildren/FeatureView";

  import HomeBox from "./HomeChildren/HomeBox";
  import HomeBoxItem from "./HomeChildren/HomeBoxItem";

  import NavBar from "components/common/navbar/NavBar";
  import TabComtrol from "components/content/tabControl/TabComtrol";

  import {getHomeMultidata, getGoods} from "../../network/home";


  export default {
    name:'home',
    data(){
      return{
        banners:null,
        recommends:null,
        goods:{
          pop:{
            page:0,
            list:[]
          },
          new:{
            page:0,
            list:[]
          },
          sell:{
            page:0,
            list:[]
          }
        }
      }
    },
    components:{
      MianSiper,
      Recommend,
      FeatureView,

      HomeBox,
      HomeBoxItem,

      NavBar,
      TabComtrol
    },
    created() {
      //获取轮播图的数据
      this.getHomeMultidata()



      //虎丘goods中的数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');


    },
    methods:{
      //获取goos数据方法
      getHomeGoods(type){
        //动态获取
        let page =  this.goods[type].page + 1
        getGoods(type,page).then((res)=>{
          this.goods[type] = res.data.data.list
        })
      },
      //获取轮播图,recommend的数据
      getHomeMultidata(){
        getHomeMultidata().then((res)=>{
          this.banners = res.data.data.banner.list,
            this.recommends = res.data.data.recommend.list;
        })
      }

    }
  }
</script>
<style  scoped>

  #home{
    padding-top: 44px;
  }
  #navBar{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 9;
  }
  .comtrol{
    position: sticky;
    top: 44px;
  }

</style>
