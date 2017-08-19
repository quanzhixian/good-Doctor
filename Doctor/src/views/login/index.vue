<template>
  <div id="login-page">
    <div class="alert">
    	<span class='s-close' @click="close()">X</span>
    	<h2 class="s-title">平安好医生手机快速登录</h2>
    	<div class="info">
    		<div class="inp s-user">
    			<input type="text" placeholder='用户名' v-model='userInfo.userName'>
    		</div>
    		<div class="inp s-pass">
    			<input type="password" placeholder='密码' v-model='userInfo.pass'>
    		</div>
    		<div class="submit" @click='submits'>登录</div>
    		<p>商品有平安集团旗下平安好医生提供</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userInfo:{
        userName:'',
        pass:''
      },
    }
  },
  methods:{
    submits(){
      if(this.userInfo.userName!='' || this.userInfo.pass!=""){
        let subInfo = this.userInfo;
        localStorage.setItem('subInfo',JSON.stringify(subInfo))
        this.$store.state.dialog.isShow=false;
        console.log(localStorage.getItem('routers'))
        this.$router.push(localStorage.getItem('routers'))
      }
      else{
        alert('请输入用户名和密码！')
      }
    } ,
    close () {
      this.$store.state.dialog.isShow=false;
    }
  }
}
</script>

<style lang='less' scoped>
#login-page{
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3)
}
.alert{
    position: absolute;
    width: 90%;
    padding: 10%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    left: 5%;
    top: 30%;
}
.s-close{
  width: 15px;
  height: 15px;
  line-height: 15px;
  position: absolute;
  right: 15px;
  top: 15px;
}
.s-title{
  line-height: 0.32rem;
}
.inp{
  width: 100%;
  height: 0.44rem;
  margin-top: 0.1rem;
  input{
    width: 100%;
    height: 90%;
    text-indent: 0.2rem;
    display: block;
    border: 0;
    border-radius: 0;
    border: 1px solid #e0e0e0;
    color: #333;
    box-sizing: border-box;
  }
}
.submit{
  width: 100%;
  height: 0.45rem;
  line-height:0.45rem;
  background-color: #ff4500;
  margin: 15px auto 12px;
  border-radius: 4px;
  color: #fff;
  line-height: 0.45rem;
  text-align: center;
  letter-spacing: 0.1rem;
}
</style>
