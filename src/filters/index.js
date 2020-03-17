import Vue from 'vue'

Vue.filter('curreny',val => {
  return '￥ ' + val 
})


Vue.filter('myriadFilter', val => {// 给超过万级以上加万
  return val 
})


Vue.filter('imgFilter', val => {
  return val.replace('w.h','128.180')
})