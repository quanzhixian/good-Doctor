<template>
  <div id="myticket">
    <headersing  :title='title'></headersing>
    <ul class="home-navigation">
    	<li class="clickable" v-for='(val,ind) in navList' :class='{active:ind==Index}' @click='check(ind)'>{{val}}</li>
    </ul>
    <div class="isEmpty">
      <p>您还没有优惠券~</p>
    </div>
  </div>
</template>

<script>
import headersing from '@/components/headersing'
export default {
  name: 'myaddress',
  data () {
    return {
      title:'我的优惠券',

      navList:['可使用','已过期','已使用'],
      Index:0
    }
  },
  components:{
    headersing
  },
  methods:{
  	check (i) {
  		this.Index=i
  	}
  }
}
</script>

<style scoped lang='less'>
  .home-navigation{
  	width: 100%;
  	height: 0.4rem;
  	background:#fff;
  	.clickable{
  		width: 25%;
  		float: left;
  		text-align: center;
  		line-height: 0.4rem;
  		&.active{
  			border-bottom: 1px solid #ff4500;
  		}
  	}
  }
  .isEmpty{
    margin-top: 2rem;
    text-align: center;
	}
	
</style>

