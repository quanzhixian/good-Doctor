<template>
  <div id="search">
    <headersearch></headersearch>
    <div class="searchbox" :class='{hide:ishide}'>
      <div class="search history">
        <h2 class="title">历史搜索 <i @click='edit' v-show='isEdit'>编辑</i>
         <i v-show='del'><span class='empty' @click='empty'>清空历史</span><span class='complete' @click='complete'>完成</span></i>
        </h2>
        <div class="item">
          <span v-for = '(item,ind) in histotrData'>{{item}}<i v-show='del' @click='delitem(ind)'>X</i></span>
        </div>
      </div>
      <div class="search hot">
        <h2 class="title">热门搜索</h2>
        <div class="item">
          <span v-for='(val,ind) in hotSearchDatas' :class='{native:ind==0}' @click='toThis(ind)'>{{val.hotword}}</span>
        </div>
      </div>
    </div>
    <div class="filter-bar" v-if='isshow==0'>
      <div class="filter-list">
        <div class="filter-item" v-for='(val,ind) in filterList'>
          <span class='filter-item-label' @click='showMenu(ind)'>{{val}}</span>
          <i :class='classObject[ind]'></i>
        </div>
      </div>
      <div class="list-menu" v-if='Index==0'>
        <div class="left-menu">
          <a href="" v-for='item in allmenu' class="category-item">{{item}}</a>
        </div>
        <div class="right"></div>
      </div>
      <div class="orderby-menu" v-if='Index==1'>排序</div>
      <div class="select-menu" v-if='Index==2'>筛选</div>
    </div>
    <div class="mark" v-if='mark==0' @click='hide'></div>
    <div v-if='isshow==0'>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>
      <p>会尽快哈数据库劳动法可接受的就看看借记卡健康快乐就安防监控乐山大佛讲课费四大皆空拉德芳斯</p>

    </div>
  </div>
</template>

<script>
import headersearch from '@/components/headersearch'
import { mapState } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      hotSearchDatas:[],
      filterList:['全部分类','默认排序','筛选'],
      allmenu:['全部分类','专科用药','美护家具','慢病用药','机械成人','食品滋补','对症找药'],
      ishide:false,
      Index:5,
      isshow:1,
      mark:1,
      up:true,
      down:false,
      i:'',
      isEdit:true,
      del:false,
      histotrData:[],
      classObject:[
        {
          'icon-arrow-up':true,
          'icon-arrow':true,
          'icon-arrow-down':false
        },
        {
          'icon-arrow-up':true,
          'icon-arrow':true,
          'icon-arrow-down':false
        },
        {
          'icon-arrow-up':true,
          'icon-arrow':true,
          'icon-arrow-down':false
        }
      ]
    }
  },
  components:{
    headersearch
  },
  created () {
    this.histotrData = this.$store.state.dialog.histotrData;
    this.$axios.get('/api/hotSearch').then(res=>{
      this.hotSearchDatas=res.data
    })
  },
  methods:{
    toThis(i) {
      var curVla = this.hotSearchDatas[i].hotword;
      this.$store.dispatch('hot',curVla)
      this.ishide=true;
      this.isshow=0
    },
    showMenu (i) {
      if(this.classObject[i]['icon-arrow-up']){
        this.classObject[i]['icon-arrow-up']=!this.classObject[i]['icon-arrow-up']
        this.classObject[i]['icon-arrow-down']=!this.classObject[i]['icon-arrow-down']
        this.Index=i
        this.mark=0
        this.i=i;
      }else{
        this.classObject[i]['icon-arrow-up']=!this.classObject[i]['icon-arrow-up']
        this.classObject[i]['icon-arrow-down']=!this.classObject[i]['icon-arrow-down']
        this.Index=5
        this.mark=1
        
      }
    },
    hide () {
      this.mark=1
      this.Index=5;
      this.classObject[this.i]['icon-arrow-up']=!this.classObject[this.i]['icon-arrow-up']
      this.classObject[this.i]['icon-arrow-down']=!this.classObject[this.i]['icon-arrow-down']
    },
    edit () {
      this.isEdit=!this.isEdit;
      this.del=!this.del
    },
    complete() {
      this.isEdit=!this.isEdit;
      this.del=!this.del
    },
    empty() {
      this.$store.dispatch('empty')
       window.location.reload()
    },
    delitem(ind) {
      alert(ind)
      this.$store.dispatch('delitem',ind)
      window.location.reload()
    }
  }
}
</script>

<style scoped lang='less'>
.hide{
  display: none;
}
.searchbox{
  margin-top: 0.5rem;
}
.search{
  width: 100%;
  background:#fff;
  padding: 0 4%;
  box-sizing: border-box;
  .title{
    height: 0.4rem;
    line-height: 0.4rem;
    i{
      float: right;
      span{

        margin-left: 0.2rem;
      }
      .empty{
        color: #999;
      }
      .complete{
        color: orange
      }
    }
  }
  .item{
    padding-top: 0.1rem;
    span{
      display: inline-block;
      padding: 0.1rem 0.16rem;
      background:#f5f5f5;
      margin-right: 0.08rem;
      margin-top: 0.1rem;
      border-radius: 0.2rem;
      font-size: 0.13rem;
      position: relative;
      i{
        position: absolute;
        color: #999;
        top: 0;
        right: 0;
      }
    }
  }
}
.hot{
  padding-bottom: 0.2rem;
  .native{
    color: #ff6f00;
    border:1px solid #ff6f00;
  }
}
.filter-bar{
  width: 100%;
  background:#fff;
  position: absolute;
  top:0.5rem;
  left: 0;
  z-index: 10;
  .filter-list{
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    .filter-item{
      flex:1;
      line-height: 0.5rem;
      text-align: center;
    }
    .icon-arrow{
      display: inline-block;
      margin-left: 5px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
    .icon-arrow-up{
      border-top: 6px solid #989898;
    }
    .icon-arrow-down{
      border-bottom: 6px solid #ff6f00;
    }
  }
}
.mark{
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background:#000;
  opacity: 0.3;
}
.list-menu{
  width: 100%;
  height: 2rem;
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  .left-menu{
    flex:1;
    height: 3rem;
    
    background:#f5f5f5;
    a{
      display: inline-block;
      height: 0.4rem;
      width: 100%;
      text-indent: 0.16rem;
      line-height: 0.4rem;
    }
  }
  .right{
    flex:1;
  }
}

</style>


  

