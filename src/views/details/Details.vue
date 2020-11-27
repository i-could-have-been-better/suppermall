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

      <back-top @click.native="backClick" v-show="BackTopIsShow"/>

      <detail-shop-cart class="cart" @addCart="addCart"  />

<!--    普通方式-->
<!--      <toast :message="ToastMeg" :isShow="ToastShow"/>-->

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
  import detailBaseInfo from "./ChildDetail/detailBaseInfo";


  import {itemParams} from "common/utils";

  import Scrool from "components/common/beteer-scroll/Scrool"
  import HomeBox from "components/content/goods/HomeBox";
  // import Toast from "components/common/toast/Toast";

  //数据请求
  import {getDetail,getGoods} from "../../network/detail";
  import {Goods ,ShopInfo,throttle,debouce} from "../../common/utils";

  //扩展知识
  import {mapActions} from "vuex"



  //混入
  import {ImageLoade} from "../../common/mixins";
  import BackTop from "components/content/backTop/BackTop";

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
          positionY:0,
          backTopPostion:1000,
          BackTopIsShow:false,
          // ToastMeg : "",
          // ToastShow:false
        }
      },
      mixins:[ImageLoade],

      components:{
        BackTop,
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        DetailShopInfo,
        Scrool,
        DetailGoods,
        DetailParameter,
        DetailUevaluate,
        HomeBox,
        DetailShopCart,
        // Toast
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
      //映射vuex中得actions里面得内容
      ...mapActions(["isWaresExist"]),

      //监听图片是否加载完毕，如果完毕的话scroll刷新
      imageload(){
        this.$refs.scroll.refresh();

        //调用防抖动加载
        this.getPosition();

      },
      //标题滚动到对应位置
      TitleClick(index){
        this.$refs.scroll.ScrollTo(0,-this.ContentPosition[index]);
      },
      //监听滚动
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

        //处理backTop什么时候显示
        if (this.positionY >= this.backTopPostion  ){
          this.BackTopIsShow = true
        }else {
          this.BackTopIsShow = false
        }

      },
      //回到顶部
      backClick(){
        this.$refs.scroll.ScrollTo(0,0,500)
      },
      //加入购物车
      addCart(){
        //添加购物车需要显示的数据
        let wares = {}
        wares.image = this.TopImages[0];
        wares.title = this.goods.title;
        wares.desc = this.goodShop.desc;
        wares.price = this.goods.price;
        wares.iid = this.iid;

        //调用得是Actions里面得方法
        // this.$store.dispatch("isWaresExist",wares).then((res)=>{
        //   this.ToastMeg = res;
        //   this.ToastShow = true;
        //
        //   setTimeout(()=>{
        //     this.ToastMeg = "";
        //     this.ToastShow = false;
        //   },1500)
        // });
        //普通方式
        //利用跟Vuex 进行映射 mapGetters mapActions ...
        // this.isWaresExist(wares).then((res)=>{
        //   // this.ToastMeg = res;
        //   //   this.ToastShow = true;
        //   //
        //   //   setTimeout(()=>{
        //   //     this.ToastMeg = "";
        //   //     this.ToastShow = false;
        //   //   },1500)
        //
        // })
        //使用插件得形式用
        this.isWaresExist(wares).then((res)=>{
          this.$toast.show(res,1500);
        })
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
  .detail {
    position: relative;
    z-index: 9;
    height: 100vh;

  }
  .cart{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 49px;
  }
  .more{
    text-align: center;
  }
</style>
