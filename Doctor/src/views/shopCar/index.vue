<template>
  <div class="shopcar-page">
    <headersing :title='title'></headersing>
    购物车页
  </div>
</template>

<script>
import headersing from '@/components/headersing'
export default {
  name: 'shopCar',
  data() {
    return {
      title:'购物车'
    }
  },
  components:{
    headersing
  }
}
</script>

<style lang='less' scoped>
</style>
