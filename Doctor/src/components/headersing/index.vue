<template>
  <div id="headersing">
    <a href="###" class="goback" @click='goback'></a>
    <h2>{{title}}</h2>
    <a href="###"></a>
  </div>
</template>

<script> 
export default {
  name: 'headersing',
  props:['title'],
  methods:{
  	goback() {
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang='less' scoped>
#headersing{
	width: 100%;
	height: 0.4rem;
	display: flex;
	background:#F8F9FB;
	a{
		flex:1;
		display: inline-block;
		text-align: center;
		line-height: 0.4rem;
	}
	h2{
		flex:5;
		text-align: center;
		line-height: 0.4rem;
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
}
</style>
