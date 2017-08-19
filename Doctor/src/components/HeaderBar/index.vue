<template>
  <div class="head-content-page">
    <div class="head-top">
      <div class="left-bar">
        <img src="//jkcdn.pajk.com.cn/image/T14FJXBy_v1RCvBVdK?img=/tf,d_webp,q_70" alt="">
      </div>
      <div class="middle-title">
        <h2>平安好医生</h2>
        <p>{{title}}</p>
      </div>
      <div class="right-bar">
        <button>立即下载</button>
      </div>
    </div>
    <div class="header-search" @click='toSearch'  v-Affix='0'>
      <div class='search-left'>
        <span>8月清凉节</span>
      </div>
      <div class='search-right'>
        <img src="//jkcdn.pajk.com.cn/image/T1ozhXBCdT1RCvBVdK?img=/tf,d_webp,q_70" alt="">
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  props:['title'],
  data () {
    return {
    }
  },
  methods:{
    toSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scope lang='less'>
  .head-content-page{
    width: 100%;
  }
  .head-top{
    width: 100%;
    padding: 0.08rem 3%;
    height: 0.6rem;
    background: #5c5c5c;
    display: flex;
    box-sizing: border-box;
    .left-bar{
      flex:1;
    }
    .middle-title{
      flex:5;
      margin-left: 5%;
      color: #fff;
      h2{
        line-height: 0.23rem;
        padding-bottom: 0.03rem;
      }
      p{
        font-size: 0.12rem;
      }
    }
    .right-bar{
      flex:3;
      button{
        background: #ff6300;
        border:none;
        outline: none;
        color: #fff;
        border-radius: 0.1rem;
        padding: 0.05rem 0.13rem;
        height: 60%;
        margin-top: 0.1rem;
      }
    }
  }
  .header-search{
    width: 100%;
    
    display: flex;
    height: 0.36rem;
    background:#ff6f00;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0.06rem 5%;
    .search-left{
      width: 78%;
      height: 0.24rem;
      background: #fff;
      border-radius: 0.1rem;
      span{
        line-height: 0.24rem;
        color: #999;
        padding-left: 0.2rem;
      }
    }
    .search-right{
      width: 6%;
      img{
        width: 0.17rem;
       height: auto;
      }
    }
  }
</style>
