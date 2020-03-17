<template>
  <div class="mine">
    个人中心
  </div>
</template>

<script>
import { getCookie  } from '@/utils/cookie'
export default {
  beforeRouteEnter (to,from,next) { // 组件内的前置钩子
    console.log('执行了没有')
    console.log('this',this)  
    const token = getCookie('_token')
    if ( token ) {
      next ()
      return ;
    }
    next( false )
  },
  beforeCreate () {
    console.log('beforeCreate')
  }

}
</script>

<style lang="stylus" scoped>
  .mine 
      height 100% 
      flex 1
</style>
