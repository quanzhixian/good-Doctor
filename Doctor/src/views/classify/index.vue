<template>
  <div class="class-page"> 
    <div class="head-top">
      <a href="###" class="left-bar" @click='goback()'></a>
      <h2  class="title">分类列表</h2>
      <div class="left-bar"></div>
    </div>
    <div class="header-search">
      <div class='search-frame'  @click='toSearch'>
        <span>8月清凉节</span>
      </div> 
    </div>
    <div class="pro-list-container">
      <div class="pro-list-nav">
        <ul>
          <li v-for='(val,ind) in listNav' @click='getProduct(ind)' :class='{active:ind==itemIndex}'>{{val.name}}</li>
        </ul>
      </div>
      <div class="pro-list-show">
        <div class="category-directory-container" v-for='item in listProduct'>
          <h3>{{item.name}}</h3>
          <ul class="category-directory-item">
            <li v-for='i in item.children'>
              <aside>
                <img src="https://jkcdn.pajk.com.cn/image/T1U2DsBghh1RCvBVdK?img=/tf,q_70" alt="">
              </aside>
              <p>{{i.name}}</p>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- https://jkcdn.pajk.com.cn/image/T110YsBs_t1RCvBVdK?img=/tf,q_70
https://jkcdn.pajk.com.cn/image/T1l7DsBvWA1RCvBVdK?img=/tf,q_70  
https://jkcdn.pajk.com.cn/image/T1edhXBXxj1RCvBVdK?img=/tf,q_70 -->
T1l7DsBvWA1RCvBVdK.jpg
<script>
  export default {
    name: 'classify',
    data () {
    	return {
    		title:'',
        listNav:[],
        listProduct:[],
        itemIndex:0,
        imgSrc:''
    	}
    },
    created () {
      let that = this;
      this.$axios.get('/api/classify').then((res)=>{
        that.listNav = res.data
        that.listProduct=res.data[0].children;
      }) 
    },
    methods:{
      getProduct (i) {
        let that =this;
        this.itemIndex=i;
        this.$axios.get('/api/classify').then((res)=>{
          that.listProduct=res.data[i].children;
        })
      },
      goback() {
        this.$router.go(-1)
      },
      toSearch() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style scope lang='less'>
  .head-top{
    width: 100%;
    height: 0.4rem;
    padding: 0 5%;
    box-sizing: border-box;
    background:#f8f9fb;
    display: flex;
    position: fixed;
    .left-bar{
      flex:1;
      text-align: center;
      line-height: 0.4rem;
    }
    .title{
      flex:6;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.14rem;
    }
    a:after{
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
  }
  .header-search{
    width: 100%;
    height: 0.36rem;
    background:#f8f9fb;
    position: fixed;
    top:0.4rem;
    .search-frame{
      width: 80%;
      height: 0.22rem;
      line-height: 0.22rem;
      border: 1px solid #ccc;
      font-size: 0.13rem;
      text-indent: 0.2rem;
      color: #999;
      background: #fff;
      border-radius: 0.1rem;
      margin: 0 auto;
    }
  }
  .pro-list-container{
    width: 100%;
    background:#f3f3f3;
    display: flex;
    .pro-list-nav{
      width: 0.8rem;
      float: left;
      position: fixed;
      top:0.76rem;
      left: 0;
      height: 600px;
      overflow-y:scroll;
      li{
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        background:#fff;
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
        &.active{
          color: #ff4500;
          border-left: 2px solid #ff4500;
          
        }
      }
    }
    .pro-list-show{
      float: left;
      padding-left: 0.88rem;
      padding-top: 0.76rem;
      overflow-x:hidden;
      .category-directory-container{
        line-height: 0.26rem;
        text-indent: 0.1rem;
        color: #999;
      }
      .category-directory-item{
        display: flex;
        flex-wrap:wrap;
        li{
          width: 33%;
          color: #333;
          background:#fff;
          margin-bottom: 0.05rem;
          img{
            width: 90%;
            display: block;
          }
          p{
            text-align: center;
            border-right: 0.05rem solid #f3f3f3;
          }
        }
      }
    }
  }
</style>
