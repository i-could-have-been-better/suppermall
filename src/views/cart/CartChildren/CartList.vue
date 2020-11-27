<template>
  <div class="cartList">

    <scrool
      :windowHeight="windowHeight"
      ref="scrool"
    >
      <cart-list-item v-for="item in waresList" :wares-item="item" />

    </scrool>

  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import Scrool from "components/common/beteer-scroll/Scrool";
    export default {
      name: "CartList",
      props:{
        waresList:{
          type:Array,
          default: []
        }
      },
      components:{
        CartListItem,
        Scrool
      },
      data(){
        return{

        }
      },
      computed:{
        windowHeight(){
          return window.screen.height  - 44 -49 - 20-40;
        }
      },
      activated() {
        this.$refs.scrool.refresh();
      }
    }
</script>

<style scoped>
</style>
