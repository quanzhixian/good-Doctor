<template>
  <div id="headersearch">
    <a href="###" @click='goback' class="goback"></a>
    <div class="search">
      <input type="text" value="88海淘节">
    </div>
  </div>
</template>

<script>
export default {
  name: 'headersearch',
  methods:{
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
  #headersearch{
    position: fixed;
    top: 0;
    z-index: 19;
    width: 100%;
    height: 0.5rem;
    background:#F8F9FB;
    display: flex;
    line-height: 0.5rem;
    a{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search{
      flex:6;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

    }
    input{
      width: 90%;
      outline: none;
      color: #ccc;
      text-indent: 0.2rem;
      border-radius: 0.2rem;
      height: 0.26rem;
      border:1px solid #eee;
    }
  }
  .goback:after{
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-135deg);
    height: 10px;
    width: 10px;
    border-width: 2px 2px 0 0;
    border-color: #999;
    border-style: solid;
    position: relative;
    top: 0;
    right: 0;
  }
</style>
