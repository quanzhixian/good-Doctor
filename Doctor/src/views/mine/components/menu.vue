<template>
  <div id="mymenu">
    <headersing  :title='title'></headersing>
    <ul class="home-navigation">
    	<li class="clickable" v-for='(val,ind) in navList' :class='{active:ind==Index}' @click='check(ind)'>{{val}}</li>
    </ul>
    <div class="isEmpty">
    	<aside>
    		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NTYxZDA2ZC1kMTg2LTRmMmQtODUyMi00YjVlZDg0ZjAwN2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTgzMTM2Q0I2OEVDMTFFNUFFNTZCNUNFQTZDNzRFNUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTgzMTM2Q0E2OEVDMTFFNUFFNTZCNUNFQTZDNzRFNUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTkwYWU1NDMtZmIwYy00ZTcyLThkZWYtODg4MjE2Y2ZiMjdkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ1NjFkMDZkLWQxODYtNGYyZC04NTIyLTRiNWVkODRmMDA3YyIvPiA8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" alt="">
    	</aside>
    	<p>你暂时还没有任何订单</p>
    	<p>到首页去看看吧~</p>
    	<button>随便逛逛</button>
    </div>
    <div class="ad-banner">
    	<img src="https://jkcdn.pajk.com.cn/T1D0JXByLQ1RCvBVdK_640x300.jpg" alt="">
    </div>
  </div>
</template>

<script>
import headersing from '@/components/headersing'
export default {
  name: 'myaddress',
  data () {
    return {
      title:'订单列表',
      navList:['全部','待付款','进行中','已完成'],
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
	width: 100%;
	text-align: center;
		aside{
			width: 20%;
			margin: 1rem auto 0.3rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		p{
			line-height: 0.26rem;
			color: #999;
		}
		button{
			margin:0.2rem auto;
			border:0;
			background:#eee;
			font-size: 0.15rem;
		}
	}
	.ad-banner{
		width: 100%;
		height: 0.3rem;
		position: fixed;
		bottom:0;
		img{
			width: 100%;
			display: block;
		}
	}
</style>

