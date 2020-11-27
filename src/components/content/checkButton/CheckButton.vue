<template>

        <img src="~assets/images/cart/tick.svg" class="check-button" :class="{active:isChecked}"/>

</template>

<script>
    export default {
        name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            default:true
          }
      }
    }
</script>

<style scoped>
  .check-button{
    border: 3px solid #aaa;
    border-radius: 50%;
  }
  .active{
    background: var(--color-tint);
    border:3px solid  var(--color-tint);
  }


</style>
