<template>
    <div class="cart-bottom">
      <div class="checkAll">
        <check-button :isChecked="ischeck" class="checkButton" @click.native="clickAll" />
        <span>全选</span>
      </div>

      <div class="priceAll">
        <span>总金额:</span>
        <span>{{priceSum}}</span>
      </div>

      <div class="settlement">
        <span>去结算</span>
        <span>({{waresLength}})</span>
      </div>

    </div>

</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
    export default {
      props:{

      },
      name: "CartBoottomBar",
      components:{
        CheckButton
      },
      data(){
        return {
          ischeck:false
        }
      },
      mounted() {
        //监听每次得cartlistitem点击
        this.$bus.$on("waresClick",()=>{
          let flag = true
          for (let i = 0 ; i <  this.$store.state.waresList.length ; i++){
            if (this.$store.state.waresList[i].checked === false){
              flag = false
              break;
            }
          }
          if (flag){
            this.ischeck = true
          }else {
            this.ischeck = false
          }




        })
      },
      computed:{
        priceSum(){
          return "￥" + this.$store.state.waresList.filter((item)=>{
            return item.checked
          }).reduce((proValue,item)=>{
            return proValue + (item.price.substr(1,item.price.length) * item.count);
          },0).toFixed(2);
        },
        waresLength(){
          return this.$store.state.waresList.filter((item)=>{
            return item.checked
          }).length
        }

      },
      methods:{
        clickAll(){
          this.ischeck = ! this.ischeck;

          for(let i = 0 ; i < this.$store.state.waresList.length ; i++) {
            this.$store.commit("seset",{
              payload:this.$store.state.waresList[i],
              isCheck : this.ischeck
            });
          }

        }
      }
    }
</script>

<style scoped>
  .cart-bottom{
    height: 40px;
    background: #eeeeee;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .checkAll{
    line-height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
    margin-right: 10px;
  }
  .checkButton{
    margin-right: 5px;
  }
  .priceAll{
    flex: 1;
  }
  .settlement{
    width: 90px;
    height: 40px;
    background: red;
    color: white;
    text-align: center;
    line-height: 40px;
  }
</style>
