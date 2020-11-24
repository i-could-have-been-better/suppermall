<template>
    <div>
      <nav-bar>
        <div slot="left" class="back" @click="back">
          <img src="~assets/images/common/back.svg">
        </div>

        <div slot="center" class="title">
          <div
            v-for="(item,index) in title"
            class="titleItem"
            :class="{active:index == curentIndex}" @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
      name: "detailNavBar",
      components:{
        NavBar
      },
      data(){
        return{
          title:["商品","参数","评论","推荐"],
          curentIndex:0
        }
      },
      methods:{
        titleClick(index){
          this.curentIndex = index;
          this.$emit("TitleClick",index);
        },
        back(){
          this.$router.back();
          //this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title .titleItem{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back img{
    margin-top: 10px;
  }
</style>
