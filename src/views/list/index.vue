<template>
  <div class="list">
    <ul>
      <li v-for = "item of lists" :key = "item.id">
        <router-link
          :to = "{
            name: 'detail',
            params: {
              id: item.id
            },
            query: { ...item }
          }"
        >
          <div class="imgbox">
            <img :src=" item.pic " alt="">
          </div>
          <div class="list_content">
            <h3> {{ item.d_title }} </h3>
            <p> 券后： {{ item.jiage | curreny }} </p>
            <p> 爆款： {{ item.istmall }} 元 </p>
            <p> 已售： {{ item.xiaoliang }} </p>
            <p> 评论： {{ item.comment }} </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      lists: []
    }
  },
  async mounted () {
    const result = await request({
      url: '/index.php',
      params: {
        r: 'class/cyajaxsub',
        page: 1,
        cid: this.$route.params.id,
        px: 't',
        cac_id:'' 
      }
    })
    this.lists = result.data.data.content
  }
}
</script>

<style lang="stylus" scoped>
  .list 
      height 100% 
      flex 1
      overflow auto
      ul 
        padding .15rem 
        li 
          margin-bottom .15rem 
          a 
            display flex 
            color #000
            .imgbox 
              width .8rem 
              height .8rem 
              margin-right .15rem 
              img  
                width 100% 
                height 100% 
</style>
