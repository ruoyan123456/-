<template>
  <div class="hot">
    <List :resource = "movies.movieList"/>
  </div>
</template>

<script>
  import List from './List'
  import BScroll from 'better-scroll'
  import { mapState,mapActions } from 'vuex'
  import _ from 'loadsh'
  export default {
    components: {
      List,
    },
    computed: {
      ...mapState({
        movies: state => state.homeStore.movies
      })
    },
    methods: {
      ...mapActions(['getMovies','getNewMovies'])
    },
    mounted () {
      // 发起数据请求
      this.getMovies()
      /* 以下代码实现的是 滚动 + 上拉加载 */
      const bs = new BScroll('.page',{
        click: true, // 开启页面可以点击
        pullUpLoad: {
          threshold: 50 // 离底部多少时触发
        }
      })

      let count = 0

      bs.on('pullingUp',() => {
        console.log('上拉')
        // 上拉一次，完成数据请求
        const ids = _.chunk( this.movies.movieIds.slice( 12 ), 10 )
        if ( count < ids.length ) {
          this.getNewMovies( ids[ count ].join(',') )
          bs.finishPullUp() // 结束上拉
        }

        if ( count == ids.length ) {
          console.log('到底了')
          bs.finishPullUp() // 结束上拉
          return;
        }
        count ++
      })

    }
  }
</script>

<style lang="stylus" scoped>
.hot 
  flex 1
</style>



