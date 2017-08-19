<template>
  <div class="main-page">
    <HeaderBar :title='title'></HeaderBar>
    <div class="business-dots">
      <div class="item"><img src="//jkcdn.pajk.com.cn/image/T16XEXBKLj1RCvBVdK?img=/tf,d_webp,q_70"><p>问医生</p></div>
      <div class="item" @click='skip'><img src="//jkcdn.pajk.com.cn/image/T1QzJXBsZT1RCvBVdK?img=/tf,d_webp,q_70"><p>健康商城</p></div>
      <div class="item"><img src="//jkcdn.pajk.com.cn/image/T1fyWXBTWQ1RCvBVdK?img=/tf,d_webp,q_70"><p>健康头条</p></div>
      <div class="item"><img src="//jkcdn.pajk.com.cn/image/T1pzhXBCWv1RCvBVdK?img=/tf,d_webp,q_70"><p>步步夺金</p></div>
    </div>
    <div class="paui-title-box">
      <h3>健康资讯</h3>
      <button>更多></button>
    </div>
    <ul class="table-content">
      <li @click='tabClick(ind)' v-for='(val,ind) in tabNavs' :class='{active:ind==itemIndex}'>{{val}}</li>
    </ul>
    <ul class="article-list">
      <li class="article-list-item" v-for='i in tabDatas'>
        <div class="item-content">
          <h3>{{i.title}}</h3>
          <p></p>
        </div>
        <div class="img-content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/index.vue'
export default {
  name: 'main',
  data () {
    return {
      msg: '',
      tabNavs:['中医养生','直播','女性健康','常见病','肿瘤预防'],
      tabDatas:'',
      itemIndex:0,
      title:'平安集团旗下成员'
    }
  },
  components:{
    HeaderBar
  },
  created () {
    var  that= this
    this.$axios.get('/api/index').then(function (res) {
      that.tabDatas = res.data[0].doc
    })
  },
  methods:{
    tabClick (ind) {
      var that= this;
      this.$axios.get('/api/index').then(function (res) {
        that.itemIndex=ind
        that.tabDatas = res.data[ind].doc
      })
    },
    skip () {
      this.$router.push('/healthy')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .business-dots{
    width: 100%;
    padding: 0.1rem 0;
    display: flex;
    background:#fff;
    .item{
      width: 25%;
      img{
        width: 76%;
        margin-left: 12%;
        height: auto;
      }
      p{
        line-height: 0.24rem;
        text-align: center;
      }
    }
  }
  .paui-title-box{
    width: 100%;
    background:#fff;
    margin-top: 0.1rem;
    padding: 0.1rem 3%;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    button{
      background: #fff;
      border: none;
      color: #666;
    }
  }
  .table-content{
    background:#fff;
    width: 100%;
    height: 0.4rem;
    padding: 0 3%;
    box-sizing: border-box;
    color: #666;
    display: -webkit-box;
    font-size: 0.13rem;
    li{
      flex:1;
      text-align: center;
      line-height: 0.4rem;
      padding-bottom: 0.1rem;
    }
    .active{
      color: #ff6f00;
      border-bottom: 1px solid #ff6f00;
    }
  }
  .article-list{
    width: 100%;
  }
  .article-list-item{
    background:#fff;
    width: 100%;
    padding: 0.13rem 5%;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    .item-content{
      flex:2;
      h3{
        display: flex;
        line-height: 0.2rem;
        justify-content: flex-start;
      }
    }
    .img-content{
      flex:1;
      margin-left: 5%;
    }
  }
</style>
