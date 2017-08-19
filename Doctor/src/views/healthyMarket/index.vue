<template>
  <div id="healthy-page">
  <HeaderBar :title='title'></HeaderBar>
  <section id='container'>
    <div class="banner-content">
      <swiper :options="swiperOption" >
          <swiper-slide v-for="item in bannerData">
              <img :src="item.img">
          </swiper-slide>
      </swiper>
    </div>
    <div class="ensure">
      <img src="https://jkcdn.pajk.com.cn/image/T13QhjBXZ_1RCvBVdK?img=/tf,q_70" alt="">
    </div>
    <div class="icon-nav">
      <ul class="icon-nav-list">
        <li class="icon-nav-item" v-for='item in iconNavData'>
          <aside><img :src="item.content.img" alt=""></aside>
          <span>{{item.content.title}}</span>
        </li>
      </ul>
    </div>
    <div class="top-line">
      <div class="left">头条</div>
      <div class="right">
        <swiper :options="topLine" >
            <swiper-slide v-for='i in topData'>
                <p>{{i}}</p>
            </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="cuthand">
      <h2 class="title">今日剁手价 <span>{{houths}}</span>:<span>{{minutes}}</span>:<span>{{seconds}}</span></h2>
      <div class="banner-content-cut">
        <swiper :options="swiperOptionCut" >
            <swiper-slide v-for="item in cutHandData" class='swiper-slide-cut'>
                <aside><img :src="item.img"/></aside>
                <p class="name">{{item.title}}</p>
                <p class="price">￥{{(item.price/100).toFixed(2)}}</p>
                <p class='origPrice'>￥{{(item.origPrice/100).toFixed(2)}}</p>
            </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="operation">
      <div v-for='item in productsData' class="operation-item">
        <div class="operation-floor" v-if='item.sections.length>1'>
          <div class="floor-bar">{{item.name}}</div>
          <ul class="operation-floor-list">
            <li class="operation-floor-item" v-for='i in item.sections'>
              <div class="left">
                <h2>{{i.content.title}}</h2>
                <p>{{i.content.subTitle}}</p>
              </div>
              <div class="right">
                <img :src="i.content.img" alt="">
              </div>
            </li>
          </ul>
        </div> 
        <div class="banner" v-if='item.sections.length==1'>
          <img :src="item.sections[0].content.img" alt="">
        </div>
      </div>
    </div>
  </section>
  <FooterBar></FooterBar>
  <login v-show='isShow'></login>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
import login from '@/views/login'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'healthy',
  data () {
  	return {
  		title:'77健康节，7.7元无门槛红包抢不停',
      cutHandData:[],
      bannerData:[],
      iconNavData:[],
      productsData:[],
      houths:"",
      minutes:"",
      seconds:"",
      isShow:'',
      loginDilo:false,
      topData:['88瘦身节，全场免税包邮！','减肥瘦身，瘦身腰带69元包邮！'],
      "swiperOptionCut": {
          slidesPerView:3.3
      },
      "swiperOption":{
        autoplay:3000,
        loop:true
      }, 
      "topLine":{
        autoplay:2000,
        direction: 'vertical',
        loop:true
      }
  	}
  },
  components:{
  	HeaderBar,
    FooterBar,
    swiper,
    swiperSlide,
    login
  },
  updated(){
    this.isShow=this.$store.state.dialog.isShow
  },
  created () {
    let that = this;
    this.$axios.get('/api/shoppmall').then((res)=>{
      var modules = res.data[0].modules;
      that.bannerData = modules[0].sections;
      that.iconNavData = modules[2].sections;
      var cutRes = res.data[0].cuthand[0].sections;
      for (var i=0;i<cutRes.length;i++) {
        var datas = JSON.parse(res.data[0].cuthand[0].sections[i].content)
        datas.img='https://jkcdn.pajk.com.cn/image/'+datas.picture+'?img=/tf,q_70'
        that.cutHandData.push(datas)
      }
      for(var i=5;i<modules.length;i++) {
        that.productsData.push(modules[i])
      }
    })
  },
  mounted () {
    var that = this;
    full();
    function full () {
      var nowDate = new Date(),
        year  = nowDate.getFullYear(),
        month = nowDate.getMonth(),
        day = nowDate.getDate(),
        nowtimes = nowDate.getTime(),
        future = new Date(year,month,day+1),
        futuretimes = future.getTime(),
        subtimes = (futuretimes-nowtimes)/1000;
        that.houths = getZero(parseInt(subtimes/(60*60)));
        that.minutes = getZero(parseInt((subtimes-that.houths*60*60)/60));
        that.seconds = getZero(parseInt(subtimes-that.houths*60*60-that.minutes*60));
    }
    setInterval(full,1000)
    function getZero(num) {
      num<=9? num = '0' + num : num = num ;
      return num
    }
      console.log(this.$store.state.dialog.isLogin)  
  }
}
</script>

<style scoped lang='less'>
    
    #container{
      margin-bottom: 0.48rem;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
    .banner-content-cut{
      width:100%;
    }
    .swiper-container{
      width: 100%;
      height: 100%;
    }
    .banner-content,.ensure{
      width: 100%;
      img{
        width: 100%;
        display: block;
      }
    }
    .title{
        line-height: 0.28rem;
        text-indent: 0.18rem;
        font-size: 0.16rem;
        color: #E81F50;
        font-weight: bold;
        margin-top: 0.1rem;
        span{
            width: 16px;
            height: 16px;
            line-height: 16px;
            padding: 2px;
            vertical-align: middle;
            margin: 12px 1px 0;
            background: #333;
            text-align: center;
            font-size: 10px;
            border-radius: 2px;
            letter-spacing: 0;
            color: #fff;
        }
      }
    .swiper-wrapper{
      width: 100%;
      height: 100%;

      .swiper-slide-cut{
        margin-left: 0.1rem;
        aside{
          border:1px solid #eee;
          img{
            width: 80%;
            margin:10%;
            height: 80%;
          }
        }

        .name{
          width: 100%;
          margin-top: 8px;
          font-size: 13px;
          color: #333;
          font-weight: 400;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .price{
         color: #ff4500;
         font-size: 0.13rem;
         line-height: 0.2rem;
        }
        .origPrice{
          color: #999;
          font-size: 0.10rem;
          text-decoration: line-through;
        }
      }
    }
    .cuthand{
      background:#fff;
      padding-left: 3%;
      box-sizing: border-box;
    }
    .icon-nav{
      width: 100%;
      padding-bottom: 0.1rem;
      background:#fff;
      border-bottom: 1px solid #eee;
      .icon-nav-list{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        li{
          width: 20%;
          aside{
            width: 100%;
            img{
              width: 60%;
              display: block;
              margin: 20%;
            }
          }
          span{
            display: block;
            font-size: 0.1rem;
            line-height: 0.14rem;
            text-align: center;
          }
        }
      }
    }
    .top-line{
      width: 100%;
      height: 0.46rem;
      padding: 0.13rem 5%;
      background:#fff;
      box-sizing: border-box;
      border-bottom: 6px solid #eee;
      .left{
        float: left;
        font-size: 11px;
        text-align: center;
        line-height: 15px;
        color: #ff4500;
        border: 1px solid #ff4500;
        border-radius: 2px;
      }
      .right{
        float: left;
        height: 0.16rem;
        padding-left: 0.1rem;
        line-height: 0.16rem;
        .swiper-slide{
          height: 100%
        }
      }
    }

.operation{
  background:#fff;
  .banner{
    img{
      width: 100%;
      display: block;
    }
  }
}
.operation-item{
  border-top: 0.06rem solid #eee;
}
.operation-floor{
  width: 100%;
 
  .floor-bar{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    /*text-indent: 0.2rem;*/
    padding: 0 5%;
    box-sizing: border-box;
  }
  .operation-floor-list{
    width: 100%;
    .operation-floor-item{
      display: inline-block;
      border-top: 1px solid #eee;
      border-right: 1px solid #eee;
      box-sizing: border-box;
      width: 24%;
      img{
        width: 72%;
        margin: 14%;
        display: block;
      }
      h2{
        font-weight: bold;
        text-align: center;
        line-height: 0.22rem;
        margin-top: 0.1rem;
      }
      p{
        font-size: 0.1rem;
        color: #999;
        text-align: center;
        margin-top: 0.04rem;
      }
      &:nth-child(1){
        width: 49%;
        .left{
          width: 50%;
          float: left;
        }
        .right{
          width: 50%;
          float: left;
        }
      }
      &:nth-child(2){
        width: 49%;
        border-bottom: 0;
        .left{
          width: 50%;
          float: left;
        }
        .right{
          width: 50%;
          float: left;
        }
      }
      &:last-child{
        width: 23%;
        border-bottom: 0;
      }
    }
  }
}
</style>
