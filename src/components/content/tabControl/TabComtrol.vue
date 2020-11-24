<template>
  <div class="tabcomtrol" ref="tabcomtrol">
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
          activeIndex:0,
          goodsList:['pop','new','sell'],
          goods: 'pop'
        }
      },
      mounted() {

      },
      methods:{
        activeClick(index){
          this.activeIndex = index;
          //将事件传到外面去   子组件访问父组件
          this.goods = this.goodsList[this.activeIndex]
          this.$emit("clicktab",this.goods);
        }
      }
    }
</script>

<style scoped>
  .tabcomtrol{
    display: flex;
    width: 100%;
    text-align: center;
    line-height: 35px;
    height: 35px;
    background-color: white;
    margin-bottom: 8px;
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
