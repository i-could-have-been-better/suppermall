<template>
    <swiper>
      <swiper-item v-for="item in TopImages" class="detailswiper" >
          <img :src="item" class="img">
      </swiper-item>
    </swiper>

</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper'

    export default {
      name: "detailSwiper",
      props:{
        TopImages:{
          type:Array,
          default(){
            return []
          }
        }
      },
      components:{
        SwiperItem,
        Swiper
      },
      created() {
      }
    }
</script>

<style scoped>
  .detailswiper{
    height: 300px;
    overflow: hidden;
  }

</style>
