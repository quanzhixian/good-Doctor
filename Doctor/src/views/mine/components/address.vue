<template>
  <div id="myaddress">
    <headersing  :title='title'></headersing>
    <div class="plusicon">
      添加地址
    </div>
  </div>
</template>

<script>
import headersing from '@/components/headersing'
export default {
  name: 'myaddress',
  data () {
    return {
      title:'地址列表'
    }
  },
  components:{
    headersing
  }
}
</script>

<style scoped lang='less'>
  .plusicon{
    width: 90%;
    margin:0.2rem 5%;
    border:1px dashed #fff;
    height: 0.4rem; 
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
    color: #ff4500;
  }
</style>
