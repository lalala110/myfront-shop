import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//导入账户管理的相关的页面
import Login from "../components/account/login/Login"
import shop from "../components/shop/Shop.vue"
import  goodsList from "../components/shop/goods/List.vue"
import  goodsDetail from "../components/shop/goods/Detail.vue"
import  shopCart from "../components/shop/shopcart/Shopcart.vue"
import  OrderPay from "../components/shop/order/Pay.vue"
import  OrderSite from "../components/shop/order/Site.vue"
import OrderComplete from "../components/shop/order/Complete.vue"

Vue.use(Router)
const goods=[
 
  {name:"goodsList",path:"goods/goodsList",component:goodsList},
  {name:"goodsDetail",path:"goods/goodsDetail/:id",component:goodsDetail}
];
const orders=[
  
  {name:"orderpay",path:"order/orderpay",component:OrderPay},
  {name:"ordersite",path:"order/ordersite/:id",component:OrderSite},
  {name:"ordercomplete",path:"order/ordercomplete",component:OrderComplete}
];
const shopcart = [
  { name: 'shopcart', path: 'shopcart', component:shopCart },
];


export default new Router({
  routes: [
    
    { name: 'login', path: '/login', component: Login },

    // 商城路由配置
    { name: 'shop', path: '/', component: shop, children: [ ...goods, ...shopcart, ...orders] },
  ]
})
