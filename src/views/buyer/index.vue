<template>
  <div class="buyer">
    立即购买页面
  </div>
</template>

<script>
import request from '@/utils/request.js';
export default {
  async beforeRouteEnter ( to,from,next ) {
    // 数据预载
    console.log(to,from,next)
    const result = await request({
      url: '/ajax/search',
      params: {
        kw: '万达',
        cityId: 1,
        stype: 2
      }
    })

    next( vm => {
      vm.$set( vm.cinemas, JSON.stringify(result.data.cinemas.list))
      next()
    })
  },
  data () {
    return {
      cinemas: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  .buyer 
      height 100% 
      flex 1
      overflow auto
</style>
