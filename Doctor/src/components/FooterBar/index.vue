<template>
    <div class="footer-bar">
      <a active-class="active" class='home'><i class='icon'></i>首页</a>
      <router-link to='/classify' active-class="active" class='ClassType'><i class='icon'></i>分类</router-link>
      <router-link active-class="active" class='ShopCar' to='/shopcar'><i class='icon'></i>购物车</router-link>
      <router-link to="/mine" active-class="active" class='Zoom'><i class='icon'></i>我的</router-link>
      
  </div>
</template>

<script>
import login from '@/views/login'

export default {
  name: 'FooterBar',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       loginDilo:''
    }
  },
  // components:{
  //   login
  // },
  methods:{
    // login () {
    //   if(localStorage['subInfo']){
    //     this.$router.push('/shopcar')
    //   }else{
    //     this.$store.dispatch('sub',false)
    //     if(!this.$store.state.dialog.isLogin){
    //       this.loginDilo=true
    //     }
    //   }
    // },
    // mine() {
    //   if(localStorage['subInfo']){
    //     this.$router.push('/mine')
    //   }else{
    //     this.$store.dispatch('sub',false)
    //     if(!this.$store.state.dialog.isLogin){
    //       this.loginDilo=true
    //     }
    //   }
    // }
  }
}
</script>

<style scoped lang='less'>
    .footer-bar{
        width: 100%;
        height: 0.48rem;
        background: #eee;
        z-index: 10;
        position: fixed;
        bottom: 0;
        display: flex;
        a{
          flex:1;
          height: 100%;
          display:flex;
          flex-direction:column;
          align-items: center;
          width: 0;
          &.active{
              color: #ff712b;
          }
          &.home{
              i{ background-position: 0 0; }
              &.active{
                 i{ background-position: 0 -50px; }
              }
          }
          &.ClassType{
              i{ background-position: -50px 0; }
              &.active{
                 i{ background-position: -50px -50px; }
              }
          }
          &.ShopCar{
              i{ background-position: -100px 0; }
              &.active{
                 i{ background-position: -100px -50px; }
              }
          }
          &.Zoom{
              i{ background-position: -150px 0; }
              &.active{
                 i{ background-position: -150px -50px; }
              }
          }

          i{
            width:0.3rem;
            height:0.3rem;
            display:block;
            background-image:url("../../static/images/icon/btm-bar-sprt.png");
            background-size:2.5rem 1rem;
            margin:0 auto;
            margin-bottom:0.04rem;
          }
      }
            
        
        
    }
</style>

