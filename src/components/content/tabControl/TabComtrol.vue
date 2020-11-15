<template>
  <div class="tabcomtrol">
      <div
        v-for="(item,index) in title"
        class="tabcomtrol-item"
        :class="{active: index == activeIndex}"
        @click="activeClick(index)"
      >
        <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
    export default {
      name: "TabComtrol",
      props:{
        title:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
          activeIndex:0
        }
      },
      methods:{
        activeClick(index){
          this.activeIndex = index;
        }
      }
    }
</script>

<style scoped>
  .tabcomtrol{
    display: flex;
    text-align: center;
    line-height: 35px;
    height: 35px;
    background-color: white;
  }
  .tabcomtrol-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 3px;
  }


</style>
