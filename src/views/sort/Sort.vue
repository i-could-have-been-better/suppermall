<template>
  <div>
    <div class="warrpr">

      <div class="content">
        <ul>
          <li> <h2>分类</h2></li>
          <button @click="btnclick">按钮</button>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>

        </ul>
      </div>
    </div>

    <scrool  @endBottom="endBottom" class="abc" :window-height="200">
        <ul>
          <li> <h2>分类</h2></li>
          <button @click="btnclick">按钮</button>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
          <li>大地方</li>
        </ul>
    </scrool>

  </div>





</template>
<script>
  //引入better-scroll
  import BScroll from 'better-scroll'

  //引入封装scrool
  import Scrool from "../../components/common/beteer-scroll/Scrool";

export default {
    components:{
      Scrool
    },
    mounted() {
      var wapper = document.querySelector(".warrpr")

      this.scroll = new BScroll(wapper,{
        //页面滚动进行监听：
        probeType:3,
        //上拉加载更对
        pullUpLoad:true
      })
    //监听页面滚动
      this.scroll.on('scroll',(position)=>{
        // console.log(position)
      })
      //上拉加载更多
      this.scroll.on('pullingUp',()=>{
        console.log("上拉加载更多");

        setTimeout(()=>{
          //完成这次的上拉加载更多，监听下一次的
          this.scroll.finishPullUp();
        },2000)
      })
    },
    methods:{
      btnclick(){
        console.log("我被点击了")
      },
      endBottom(item){
        console.log(item)
        console.log("我回来了")
      }
    }

}
</script>
<style scoped>
  .warrpr{
    width: 100%;
    height: 140px;
    background: red;
    overflow: hidden;
  }

  .abc{
    height: 100px;
    overflow: hidden;
  }
</style>
