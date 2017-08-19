import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/views/index.vue'
import Healthy from '@/views/HealthyMarket'
import Classify from '@/views/classify'
import Search from '@/views/search'
import Mine from '@/views/mine'
import Shopcar from '@/views/shopCar'
import Myaddress from '@/views/mine/components/address.vue'
import Mymenu from '@/views/mine/components/menu.vue'
import Myticket from '@/views/mine/components/ticket.vue'
import store from '../store'
Vue.use(Router)

let routers =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/healthy',
      name: 'healthy',
      component: Healthy
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/mine/address',
      name: 'address',
      component: Myaddress
    },
    {
      path: '/mine/menu',
      name: 'menu',
      component: Mymenu
    },
    {
      path: '/mine/ticket',
      name: 'ticket',
      component: Myticket
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    }
  ]
})

routers.beforeEach((to, from, next) => {
  if(to.path=="/shopcar" || to.path=="/mine"){
    //判断一下跳转的路由是否是购物车或我的
    if(localStorage['subInfo']){
      //如果有值
      next()
    }else{
      store.state.dialog.isShow=true;
      localStorage.setItem('routers',to.path);
    }
  }
  else{
    next()
  }
  
})


export default routers;








