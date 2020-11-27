<template>
  <div class="wares">
    <div class="wares-item">
      <div class="check">
        <check-button class="checkButton" :isChecked="waresItem.checked" @click.native="waresClick"/>
      </div>
      <div class="image">
        <img :src="waresItem.image">
      </div>
      <div class="content">
        <p class="title">{{waresItem.title}}</p>
        <p class="desc">{{waresItem.desc}}</p>
        <span class="price">{{waresItem.price}}</span>

        <span class="count"><span class="X">X</span>{{waresItem.count}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
    export default {
      name: "CartListItem",
      props: {
        waresItem: {
          type: Object,
          default:{}
        }
      },
      components:{
        CheckButton
      },
      methods:{
        waresClick(){
          this.waresItem.checked = !this.waresItem.checked;
          this.$bus.$emit("waresClick");
        }
      }
    }
</script>

<style scoped>
  .wares-item{
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .wares-item div{
    justify-items: center;
    height: 140px;
  }
  .wares-item div:nth-child(1){
    flex: 1;
  }
  .wares-item div:nth-child(2){
    flex: 3;
  }
  .wares-item div:nth-child(3){
    flex: 6;
  }

  .check{
    text-align: center;
    line-height: 160px;
  }

  .wares-item .image{
    height: 120px;
    overflow: hidden;
    border-radius: 20px;
    text-align: center;
  }
  .wares-item .image img{
    width: 85%;
  }
  .wares-item .content{
    position: relative;
  }
  .wares-item .content .title{
    width: 200px;
    height: 18px;
    margin: 10px auto;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-weight: 700;
  }
  .desc{
    width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-top: 10px;
    text-align: center;
  }
  .price{
    position: relative;
    color: var(--color-tint);
    left: 0px;
    font-size: 18px;
    bottom: -36px;
  }
  .count{
    position: relative;
    bottom: -36px;
    float: right;
    padding-right: 10px;
  }
  .X{
    font-size: 12px;
  }

</style>
