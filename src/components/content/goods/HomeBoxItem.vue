<template>
    <div class="boxItem" @click.prevent="toDetails">
      <a href="">
        <img v-lazy="showImage" @load="imageLoad">
        <div>
          <p class="text">{{item.title}}</p>
          <span class="price">{{item.price}}</span>
          <span class="img"></span>
          <span class="cfav">{{item.cfav}}</span>
        </div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "HomeBoxItem",
      props:{
        item:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      computed:{
        showImage(){
          return this.item.image || this.item.show.img
        }
      },
      methods:{
        imageLoad(){
          //发送事件总线

          //区别时间总线 方式一：
          // if (this.$route.path == '/home'){
          //   this.$bus.$emit('HomeImageLoad');
          // }else if (this.$route.path == '/detail'){
          //   this.$bus.$emit('DetailImageLoade')
          // }
          //方式二
          this.$bus.$emit("imageLoad");
        },
        toDetails(){
          //跳转到详情页
          // this.$router.push("/detail")

          // //传递参数一：
          // this.$router.push("/detail/" + this.item.iid)

          //参数传递二：
          this.$router.push({
            path:'/detail',
            query:{
              iid:this.item.iid
            }
          })
        }
      }
    }
</script>

<style scoped>
  .boxItem{
    width: 50%;
    float: left;
    text-align: center;
  }
  .boxItem img{
    width: 95%;
    border-radius: 8px;
  }
  .boxItem .text{
    white-space:nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    line-height: 22px;
    padding: 3px;
  }
  .boxItem .price{
    color: var(--color-high-text);
    margin-right: 3px;
  }
  .boxItem .img{
    content: url("../../../assets/images/common/collect.svg");
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
</style>
