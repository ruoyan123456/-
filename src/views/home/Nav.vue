<template>
  <nav class="home_nav">
    <div class="city">
      <span> 杭州 </span>
      <i class="fas fa-caret-down"></i>
    </div>
    <ul>
      <router-link :to = "{ name: 'hot' }" tag = "li" active-class = "active"> 正在热映 </router-link>
      <router-link :to = "{ name: 'coming' }"  tag = "li" active-class = "active"> 即将上映 </router-link>
    </ul>
    <div class="search">
      <i class="fas fa-search"></i>
    </div>
  </nav>
</template>

<style lang="stylus" scoped>
  @import '~assets/stylesheets/border.styl';
  @import '~assets/stylesheets/constant.styl';
  .home_nav 
    height .44rem
    display flex 
    border 0 0 1px 0, #ccc 
    padding 0 .15rem
    align-items center 
    box-sizing border-box
    .city 
      flex 70
    ul 
      height 100%
      flex 260
      display flex 
      justify-content space-around
      li 
        margin 0 .15rem
        line-height .44rem
        color #696969
        font-weight bold 
        padding 0 .1rem
        &.active 
          border-bottom 1px solid $themeColor 
          color $themeColor 
    .search 
      flex 45 
      display flex 
      justify-content  flex-end
      i 
        font-size .24rem 
        color $themeColor
</style>
