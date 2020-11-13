<template>
    <!-- TabBarItem组件 -->
        <div class="TabBarItem" @click="onActive()">
            <!-- 具名插槽 -->
            <div v-if="!on">
                <slot name="item-icon"></slot>
            </div>
            <div v-else>
                <slot  name="item-icon-active"></slot>
            </div>
            <div  :style="ActiveStyle">
                <slot  name="item-text"></slot>
            </div>
        </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:"red"
        }
    },
    data(){
        return{
            // isActive : true
        }
    },
    methods:{
        onActive(){
            this.$router.replace(this.path);
        }
    },
    computed:{
        on(){
            return this.$route.path == this. path;
        },
        ActiveStyle(){
            if(this.on){
                return {color : this.activecolor}
            }else{
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .TabBarItem{
        flex: 1;
        text-align: center;
        height: 49px;
        background: #f6f6f6;
    }
    .TabBarItem img{
        width: 24px;
        margin-top: 3px;
    }
    .active{
        color: red;
    }
</style>
