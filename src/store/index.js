import Vuex from 'vuex'
import Vue from 'vue'

import homeStore from '@/views/home/store'

Vue.use( Vuex )


const store = new Vuex.Store({
  modules: {
    homeStore
  }
})


export default store 