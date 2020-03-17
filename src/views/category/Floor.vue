<template>
  <div class="floor">
    <div v-for = " (item,index) of floorData" :key = "index">
      <h3> {{ item.name }} </h3>
      <ul>
        <li v-for = " ele of item.list " :key = "ele.api_cid">
          <router-link
            :to = "{
              name: 'list',
              params: {
                id: ele.api_cid
              },
              query: {
                a: 1,
                b: 2
              }
            }"
          >
            <img :src=" ele.img " alt="">
            <span> {{ ele.name }} </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['floors'],
  computed: {
    floorData () {
      return this.floors && this.floors.floors // 处理方式
    }
  }
}
</script>

<style lang="stylus" scoped>
  .floor 
    padding .1rem 
    div
      margin-bottom .4rem 
      h3 
        font-size .16rem 
        font-weight bold 
        margin-bottom .2rem 
      ul 
        display flex 
        flex-wrap wrap 
        li 
          width 28%
          margin-right .1rem 
          margin-bottom .2rem 
          a 
            display flex 
            flex-direction column
            justify-content center 
            img 
              width .65rem 
              height .65rem 
              margin-bottom .1rem 
            span 
              font-size .12rem 
              text-align center 
              color #696969


</style>
