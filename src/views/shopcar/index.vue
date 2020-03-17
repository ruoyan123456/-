<template>
  <div class="shopcar">
     <div v-if = "f">
       购物车列表
     </div>
     <div v-else>
       暂无商品，请您前去添加
     </div>
  </div>
</template>

<script>
import {
  getStorage
} from '@/utils/storage'
export default {
  data () {
    return {
      f: false,
      shopcar: getStorage('shopcar')
    }
  },
  mounted () {
    const data = getStorage('shopcar')
    if ( data.length != 0 ) {
      this.f = true 
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopcar 
      height 100% 
      flex 1
</style>
