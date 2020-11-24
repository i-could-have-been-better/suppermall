<template>
  <div class="wapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      props:{
        //是否需要监听 页面滚动
        scroolEnd:{
          type:Number,
          default() {
            return 0;
          }
        },
        protoType:{
          type:Number,
          default() {
            return 0;
          }
        },
        //是否需要监听上拉加载更多
        pullUpLoad:{
          type:Boolean,
          default() {
            return false;
          }
        },
        //屏幕得高度
        windowHeight:{
          type:Number
        }
      },
        name: "Scrool",
        mounted() {
          this.scrool = new BScroll(this.$refs.wrapper,{
            //监听属性
            probeType:this.scroolEnd,
            //监听下拉
            pullUpLoad: this.pullUpLoad,
            click:true
          })
          //设置整体的高度
          this.InitDom();


          if (this.scroolEnd === 2 || this.scroolEnd === 3){
            //监听滚动
            this.scrool.on('scroll', (position) => {
              //将事件传出去
              this.$emit("scrollBack", position)
            })
          }

          if (this.pullUpLoad === true){
            //监听下拉加载更多
            this.scrool.on("pullingUp",()=>{
              this.$emit("pullingUp");
            })
          }


        },
      methods:{
        InitDom(){
          this.$refs.wrapper.style.height = this.windowHeight + 18 + 'px';
        },
        ScrollTo(x,y,time=500){
          this.scrool && this.scrool.scrollTo(x,y,500);
        },
        //重置上拉加载更多
        finishPullUp(){
          this.scrool && this.scrool.finishPullUp();
        },
        refresh(){
          this.scrool && this.scrool.refresh();
        }
      }
    }
</script>

<style scoped>
  .wapper{
    overflow: hidden;
  }

</style>
