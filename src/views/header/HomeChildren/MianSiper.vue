<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imageUpLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper'
    export default {
      props:{
        banners:Array
      },
      components:{
          SwiperItem,
          Swiper
      },
      data(){
        return{
          flag : false
        }
      },
      methods:{
        imageUpLoad(){
          if (!this.flag){
            this.$emit("imageUpLoad");
            this.flag = true
          }

        }
      }
    }
</script>

<style scoped>

</style>
