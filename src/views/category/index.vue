<template>
  <div class="category">
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <Floor :floors = "items[ activeIndex ]"/>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import request from '@/utils/request.js'
import Floor from './Floor'
export default {
  data () {
    return {
      activeIndex: 0,
      items: []
    }
  },
  components: {
    Floor
  },
  async mounted () {
    const result = await request({
      url: '/index.php',
      params: {
        r: 'class/category',
        type: 1
      }
    })
    const data = result.data.data.data.map( item => {
      item.text = item.name 
      return item 
    }) 
   
   this.items = data 

  }
}
</script>

<style lang="stylus" scoped>
  .category 
      height 100% 
      flex 1
      overflow hidden
</style>
