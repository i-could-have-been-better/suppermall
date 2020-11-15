<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image">
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
      }
    }
</script>

<style scoped>

</style>
