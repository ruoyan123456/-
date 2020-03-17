<template>
  <footer>
    <ul>
      <li 
        v-for = " item in tabbars"
        :key = "item.id"
      >
        <router-link 
          :to=" item.path "
          active-class = "active"
        >
          <i class="fas" :class = "[ item.iconName ]"></i>
          <span> {{ item.text }} </span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tabbars: [
        {
          id: 1,
          text: '首页',
          iconName: 'fa-home',
          path: '/home' // 路由路径
        },
        {
          id: 2,
          text: '推荐',
          iconName: 'fa-horse',
          path: '/recommend' // 路由路径
        },
        {
          id: 3,
          text: '分类',
          iconName: 'fa-jedi',
          path: '/category' // 路由路径
        },
        {
          id: 4,
          text: '购物车',
          iconName: 'fa-shopping-cart',
          path: '/shopcar' // 路由路径
        },
        {
          id: 5,
          text: '我的',
          iconName: 'fa-user-secret',
          path: '/mine' // 路由路径
        },
        
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  
  @import '~assets/stylesheets/border.styl';
  @import '~assets/stylesheets/constant.styl';
  footer 
    height .48rem 
    border 1px 0 0 0, #ccc
    background white 
    ul 
      height 100%
      display flex 
      justify-content space-around
      align-items center 
      li 
        a 
          display flex 
          flex-direction column 
          justify-content center 
          color #696969 
          &.active 
            i   
              color $themeColor 
            span 
              color $themeColor 
          i 
            align-self  center
            margin-bottom .04rem
          span 
            font-size .12rem 
            
</style>

