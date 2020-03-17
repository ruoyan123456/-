
import Vue from 'vue'
import VueRouter from 'vue-router'
import routerTable from './routes'

Vue.use( VueRouter )


// const routerTable = []




// const router = new VueRouter( options )
const router = new VueRouter({
  mode: 'history',
  routes: routerTable 
})


export default router 