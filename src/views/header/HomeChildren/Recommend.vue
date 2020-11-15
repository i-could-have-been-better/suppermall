<template>

  <div class="recommend">
    <div v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
    export default {
      props:{
        recommend:Array
      }
    }
</script>

<style scoped>
  .recommend{
    margin-top: 8px;
    width: 100%;
    display: flex;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 10px #eee solid;
  }
  .recommend img{
    width: 80%;
  }
</style>
