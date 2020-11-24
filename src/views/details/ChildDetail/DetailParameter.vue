<template>
    <div class="Parameter" v-if="Object.keys(itemParams).length !== 0">
      <table class="tables">
        <tr v-for="item in itemParams.tables[0]">
          <td v-for="value in item">
            {{value}}
          </td>
        </tr>
      </table>

      <table class="info">
        <tr v-for="item in itemParams.info">
          <td v-for="value in item">
            <span>{{value}}</span>
          </td>
        </tr>
      </table>

    </div>
</template>

<script>
    export default {
      name: "DetailChildDetail",
      props:{
        itemParams:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>

  .Parameter{
    padding-top: 30px;
    border-top: 5px solid #eee;
    padding-bottom: 30px;
    border-bottom: 3px solid #eeeeee;
  }

  .tables{
    width: 100%;
  }
  .tables tr{
    width: 100%;
    line-height: 30px;
    text-align: center;

  }
  .tables tr td{
    padding: 5px;
    border-bottom: 2px solid #eeeeee;
  width: 100px;
  }

  .tables tr:last-child td{
    border-bottom: 4px solid #eeeeee;
  }

  .info{
    width: 100%;
  }
  .info tr{
    width: 100%;
    line-height: 30px;

  }
  .info tr td{
    padding: 5px;
    border-bottom: 2px solid #eeeeee;
    width: 100px;
  }
  .info tr td:nth-child(1){
    width: 20px;
    padding-left: 20px;
  }

  .info tr td:nth-child(2){
    color: var(--color-high-text);
  }

</style>
