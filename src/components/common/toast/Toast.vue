<template>
    <div class="toast" v-show="isShow">
      <span >{{message}}</span>
    </div>
</template>

<script>
    export default {
      name: "Toast",
      props:{
        // message:{
        //   type:String,
        //   default:""
        // },
        // isShow:{
        //   type:Boolean,
        //   default: true
        // }
      },
      data(){
        return{
          message:"",
          isShow:false
        }
      },
      methods:{
        show(message,delay){
          this.isShow = true;
          this.message = message
          setTimeout(()=>{
            this.message = "";
            this.isShow = false
          },delay)
        }
      }
    }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 15px;
    color: white;
    border-radius: 10px;
    background-color: rgba(0,0,0,.8);
    z-index: 999;
  }

</style>
