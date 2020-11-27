<template>
  <div class="cart">
    <nav-bar class="title">
      <div slot="center">
        <span>购物车</span>
        <!-- 这里如果直接这样写得话内容太长不太美观-->
<!--        <span>({{$store.state.waresList.length}})</span>-->
        <span>({{getwaresListLeng}})</span>
      </div>

    </nav-bar>

    <cart-list :wares-list="waresList" />

    <cart-boottom-bar />



  </div>


</template>
<script>
  //NavBar得引入
  import NavBar from "components/common/navbar/NavBar";
  //购物车物品得展示
  import CartList from "./CartChildren/CartList";
  import CartBoottomBar from "./CartChildren/CartBoottomBar";

  //这个属性主要内容是将vuex中得getters得内容在computed属性中添加

  import {mapGetters} from "vuex"
  import {itemParams} from "../../common/utils";
export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBoottomBar
  },
  data(){
    return{
      waresList : [],
      isCheck:false
    }
  },
  computed:{
    //将VUex 中得内容在computed进行注册
    ...mapGetters(["getwaresListLeng","getwareList"])

  },
  created() {
    this.waresList = this.getwareList;
  },
  mounted() {

  }


}
</script>
<style  scoped>
  .title{
    color: white;
    background: var(--color-high-text);
  }
</style>
