import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from '@/store'
// 导入animate.css 
import 'animate.css'

// 引入项目自适应文件 rem.js 

import './utils/rem.js'

// 导入过滤器

import '@/filters'

// 导入全局路由钩子
import '@/router/globalRouter'

// 引入路由模块
import router from '@/router'

// 引入 vant-ui 组件
import { 
  TreeSelect,
  Image,Stepper,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Button
} from 'vant'

Vue.use( TreeSelect  )
Vue.use( Image  )
Vue.use( Stepper )
Vue.use( GoodsAction )
Vue.use( GoodsActionIcon )
Vue.use( GoodsActionButton )
Vue.use( Button )

Vue.config.productionTip = false

new Vue({
  router,// 为全局注入路由，得到两个属性  $router  $route
  store,
  render: h => h(App),
}).$mount('#app')
