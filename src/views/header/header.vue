<template>
    <div id="home">

      <nav-bar id="navBar">
        <div slot="center">
          <span>购物街</span>
        </div>
      </nav-bar >

      <tab-comtrol
        :title="['流行','新款','精选']"
        v-on:clicktab="tabClick"
        ref="tabcontrol1"
        class="Topcomtrol"
        v-show="isFixed"
      />

      <b-scroll class="content"
                :windowHeight="windowHeight"
                ref="scroll"
                :scrool-end="3"
                @scrollBack="scrollBack"
                :pull-up-load="true"
                @pullingUp="addMore"
      >
        <mian-siper v-bind:banners="banners" @imageUpLoad="imageUpLoad"></mian-siper>
        <recommend v-bind:recommend="recommends"></recommend>
        <feature-view></feature-view>

        <tab-comtrol
          :title="['流行','新款','精选']"
          v-on:clicktab="tabClick"
          ref="tabcontrol2"
          class="comtrol"

        />

        <home-box :goodList = goods[goodType].list />

<!--        处理划不动得情况-->
        <p class="endCenter">下拉加载更多</p>

      </b-scroll>

<!--      回到顶部  .native 拥有原生事件-->
      <back-top v-on:click.native="backClick" v-show="isShow"></back-top>
    </div>
</template>
<script>
  import MianSiper from "./HomeChildren/MianSiper";
  import Recommend from "./HomeChildren/Recommend";
  import FeatureView from "./HomeChildren/FeatureView";


  import NavBar from "components/common/navbar/NavBar";
  import TabComtrol from "components/content/tabControl/TabComtrol";
  import {HomeBox,HomeBoxItem} from 'components/content/goods/index'    //goods
  import BScroll from "../../components/common/beteer-scroll/Scrool"
  import BackTop from "components/content/backTop/BackTop";


  import {getHomeMultidata, getGoods} from "../../network/home";

  //节流、防抖动函数
  import {debouce,throttle} from 'common/utils'

  import {ImageLoade} from "../../common/mixins";

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
        },
        goodType:'pop',
        endButton:0,
        isShow:false,
        scroll:this.$refs.scroll,
        tabOffSetTop:0,
        isFixed:false,
        saveY:0
      }
    },
    //混入
    mixins:[ImageLoade],
    components:{
      MianSiper,
      Recommend,
      FeatureView,

      HomeBox,
      HomeBoxItem,
      BScroll,
      BackTop,

      NavBar,
      TabComtrol
    },
    created() {
      //获取轮播图的数据
      this.getHomeMultidata()

      this.getHomeGoods('pop');
      //虎丘goods中的数据
      this.getHomeGoods('new');
      this.getHomeGoods('sell');


    },
    mounted() {

    },
    //处于活跃得时候监听
    activated() {
      //滚动到上次离开时得地方
        this.$refs.scroll.ScrollTo(0,this.saveY,0)
      //刷新一次：
        this.$refs.scroll.refresh();
    },
    //不处于活跃时监听
    deactivated() {
      //将位置记录
      this.saveY = this.$refs.scroll.scrool.y;

      //删除时间总线
      this.$bus.$off("imageLoad",this.ImageLoad)

    },
    methods:{
      //获取goos数据方法
      getHomeGoods(type){
        //动态获取
        let page =  this.goods[type].page + 1
        getGoods(type,page).then((res)=>{
          //将请求到的list追加到后面
          this.goods[type].list.push( ...res.data.data.list);
          //每次请求自加一
          this.goods[type].page++;
          //重置上拉加载更多
          this.$refs.scroll.finishPullUp();
        })
      },
      //获取轮播图,recommend的数据
      getHomeMultidata(){
        getHomeMultidata().then((res)=>{
          this.banners = res.data.data.banner.list,
            this.recommends = res.data.data.recommend.list;
        })
      },
      //内部发生点击之后传出来的数据
      tabClick(item){
        this.goodType = item;
        switch (item) {
          case "pop":
            this.$refs.tabcontrol2.activeIndex = 0;
            this.$refs.tabcontrol1.activeIndex = 0;
            break;
          case "new":
            this.$refs.tabcontrol2.activeIndex = 1;
            this.$refs.tabcontrol1.activeIndex = 1;
            break;
          case "sell":
            this.$refs.tabcontrol2.activeIndex = 2;
            this.$refs.tabcontrol1.activeIndex = 2;
            break;
        }
      },
      //回到顶部
      backClick(){
        this.$refs.scroll.ScrollTo(0,0,500)

      },
      //隐藏或者显示
      scrollBack(position){
        //backTop 是否显示或者隐藏
        this.isShow =  (- position.y) > 1000;

        //是否需要设置flex属性
        this.isFixed = (-position.y) > this.tabOffSetTop
      },
      //上拉加载更多：
      addMore(){
        this.getHomeGoods(this.goodType);
      },
      //获取tabControl的offSetTop
      imageUpLoad(){
        //获取tabcontrol顶部距离
        this.tabOffSetTop = this.$refs.tabcontrol2.$el.offsetTop -44 ;
        this.$refs.scroll.refresh();
      }
    },
    computed:{
      windowHeight(){
         return window.screen.height - 49 - 44;
      }
    }
  }
</script>
<style  scoped>

  #home{
    position: relative;
  }
  #navBar{
    background-color: var(--color-tint);
    color: white;
    width: 100%;
    z-index: 9;
  }
  .endCenter{
    text-align: center;
  }

  /*.istoFixed{*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*}*/
  .Topcomtrol{
    position: absolute;
    z-index: 10;
  }

</style>
