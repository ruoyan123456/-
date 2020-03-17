

import { getCookie } from '@/utils/cookie'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use( Toast )

// 路由懒加载
const Home = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/home/index.vue')
const Recommend = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/recommend/index.vue')
const Category = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/category/index.vue')
const ShopCar = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/shopcar/index.vue')
const Mine = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/mine/index.vue')
const Error = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/error/index.vue')
const HotMovieComp = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/home/HotMovieComp.vue')
const ComingMovieComp = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/home/ComingMovieComp.vue')
const List = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/list/index.vue')
const Detail = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/detail/index.vue')
const Service = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/service/index.vue')
const Shop = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/shop/index.vue')
const Buyer = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/buyer/index.vue')
const Login = () => import(/* webpackChunkName: "group-ruoyan" */ '@/views/login/index.vue')






const routeTable = [
  {
    path: '/', // http://localhost:8080/
    redirect: '/home/hot',  // 重定向
  },
  {
    path: '/home',
    component: Home, 
    children: [ // 子路由表
      { 
        path: 'hot',// 子路由不加 /
        component: HotMovieComp,
        name: 'hot', // 给路由起名字
        meta: { // 元信息
          include: 'HotMovieComp'
        }
      },
      {
        path: 'coming',
        component: ComingMovieComp,
        name: 'coming',
        meta: {
          include: 'ComingMovieComp'
        }
      }
    ],
    meta: {
      include: 'Home'
    }
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      include: 'Recommend'
    }
  },
  {
    path: '/service',
    component: Service,
    meta: {
      include: 'Service'
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      include: 'Shop'
    }
  },
  {
    path: '/buyer',
    component: Buyer,
    meta: {
      include: 'Buyer'
    }
  },
  {
    path: '/list/:id', // 动态路由组件的配置 
    component: List,
    name: 'list',
    meta: {
      include: 'List'
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    name: 'detail',
    meta: {
      include: 'Detail'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      include: 'Category'
    }
  },
  {
    path: '/shopcar',
    component: ShopCar,
    beforeEnter ( to,from,next ) {
      console.log('to',to)
      const token = getCookie('_token')
      if ( token ) {

        console.log('token')
        next()
      } else {
        Toast.fail('您还没有登录，无法查看购物车，请先去登录')
        next( false )
      }
    },
    meta: {
      include: 'ShopCar'
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      include: 'Mine'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      include: 'Login'
    }
  },
  {
    path: '*',// 错误路由配置
    component: Error,
    meta: {
      include: 'Error'
    }
  }
]


export default routeTable 