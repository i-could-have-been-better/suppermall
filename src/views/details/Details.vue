<template>
    <div class="detail">
      <detail-nav-bar @TitleClick="TitleClick" ref="navBar" />
<!--      轮播图-->
      <scrool
        class="content"
        :windowHeight="windowHeight"
        ref="scroll"
        @scrollBack="scrollBack" :scroolEnd="3">
        <detail-swiper v-bind:TopImages="TopImages" />

        <detail-base-info :goods="goods"></detail-base-info>

        <detail-shop-info :shop="shops" />

        <detail-goods v-bind:goodShop="goodShop" @imageload="imageload"/>

        <detail-parameter :itemParams="itemParams" ref="parameter"/>

        <detail-uevaluate :evaluate="evaluate" ref="uevaluate"/>

        <home-box :goodList="recommend" ref="goods"/>
        <p class="more">下拉加载更多</p>
      </scrool>
      <detail-shop-cart class="cart" />
    </div>
</template>

<script>
  import detailNavBar from "./ChildDetail/detailNavBar";
  import detailSwiper from "./ChildDetail/detailSwiper";
  import DetailShopInfo from "./ChildDetail/DetailShopInfo";
  import DetailGoods from "./ChildDetail/DetailGoods";
  import DetailParameter from "./ChildDetail/DetailParameter";
  import DetailUevaluate from "./ChildDetail/DetailUevaluate";
  import DetailShopCart from "./ChildDetail/DetailShopCart";


  import {itemParams} from "common/utils";

  import Scrool from "components/common/beteer-scroll/Scrool"
  import HomeBox from "components/content/goods/HomeBox";

  //数据请求
  import {getDetail,getGoods} from "../../network/detail";
  import {Goods ,ShopInfo,throttle,debouce} from "../../common/utils";


  import detailBaseInfo from "./ChildDetail/detailBaseInfo";

  //混入
  import {ImageLoade} from "../../common/mixins";

  export default {
      name: "Details",
      data(){
        return{
          iid:null,
          TopImages:[],
          goods: {},
          shops:{},
          goodShop:{},
          itemParams:{},
          evaluate:[],
          moreShop:{},
          recommend:[],
          ImageLoad:null,
          ContentPosition:[],
          getPosition:{},
          positionY:0
        }
      },
      mixins:[ImageLoade],

      components:{
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        DetailShopInfo,
        Scrool,
        DetailGoods,
        DetailParameter,
        DetailUevaluate,
        HomeBox,
        DetailShopCart
      },
      mounted() {
        console.log("detail")
        // let  recent = throttle( this.$refs.scroll.refresh,30);
        // this.ImageLoad = ()=>{
        //   recent();
        // }
        // this.$bus.$on("imageLoad",this.ImageLoad)
      //调用防抖动函数
        this.getPosition = debouce(()=>{
          this.ContentPosition = []
          this.ContentPosition.push(0);
          this.ContentPosition.push(this.$refs.parameter.$el.offsetTop - 30);
          this.ContentPosition.push(this.$refs.uevaluate.$el.offsetTop);
          this.ContentPosition.push(this.$refs.goods.$el.offsetTop - 50);
        },100)


      },
      created() {
        //第一种方式接收
          // this.iid = this.$route.params.iid;
        //第二种方式接收
        this.iid = this.$route.query.iid

        //查找里面得数据
        getDetail(this.iid).then((res)=>{
          const data = res.data.result;
          //获取轮播图的信息
          this.TopImages = data.itemInfo.topImages;
          //类构造器
          //获取商品基本信息
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          //获取店铺信息
          this.shops = new ShopInfo(data.shopInfo);
          //获取goods的信息
          this.goodShop = data.detailInfo;

          //获取尺码相关的信息
          this.itemParams = new itemParams(data.itemParams.info,data.itemParams.rule)

          //评价信息
          if (data.rate.cRate != 0){
            this.evaluate = data.rate.list
          }

          //这里如果直接获取的对应的offsetTOp值得话是获取不到得，第一个原因是DOM没有加载，第二个原因是图片还没加载
          // this.ContentPosition = []
          // this.ContentPosition.push(0);
          // this.ContentPosition.push(this.$refs.parameter.$el.offSetTop);
          // this.ContentPosition.push(this.$refs.uevaluate.$el.offSetTop);
          // this.ContentPosition.push(this.$refs.goods.$el.offSetTop);
          // console.log(this.ContentPosition)
          // this.$nextTick(()=>{
          //   this.ContentPosition = []
          //   this.ContentPosition.push(0);
          //   this.ContentPosition.push(this.$refs.parameter.$el.offsetTop - 30);
          //   this.ContentPosition.push(this.$refs.uevaluate.$el.offsetTop);
          //   this.ContentPosition.push(this.$refs.goods.$el.offsetTop - 50);
          //   console.log(this.ContentPosition)
          // })


        })

        //获取推荐数据信息
        getGoods().then((res)=>{
          const data = res.data.data
          this.recommend = data.list

        })

      },
    methods:{
      imageload(){
        this.$refs.scroll.refresh();

        //调用懒加载
        this.getPosition();

      },
      TitleClick(index){
        this.$refs.scroll.ScrollTo(0,-this.ContentPosition[index]);
      },
      scrollBack(position){
        this.positionY = -position.y;

        //随着滚动而变化navbar选中状态
          if(this.positionY < 0 || this.positionY < this.ContentPosition[1]){
            this.$refs.navBar.curentIndex = 0
          }else if (this.positionY < this.ContentPosition[2]){
            this.$refs.navBar.curentIndex = 1
          }else if (this.positionY < this.ContentPosition[3]){
            this.$refs.navBar.curentIndex = 2
          }else if(this.positionY >= this.ContentPosition[3]){
            this.$refs.navBar.curentIndex = 3
          }






      }

    },
    computed:{
      windowHeight(){
        return window.screen.height  - 44 -49;
      }
    },
    destroyed() {
        this.$bus.$off("imageLoad",this.ImageLoad)
    }
  }
</script>


<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background: white;
    height: 100vh;
  }
  .cart{
    position: relative;
    bottom: 20px;
    left: 0;
    z-index: 200;
    height: 49px;
  }
  .more{
    text-align: center;
  }
</style>
