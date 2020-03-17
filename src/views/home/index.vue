<template>
  <div class="home">
    <Nav/>
    <!-- 二级路由展示区域 -->
    <keep-alive
      :include="$route.meta.include"
    >
      <transition
        mode = "out-in"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  components: {
    Nav
  },
  mounted () {
    console.log( this )
  }
}
</script>

<style lang="stylus" scoped>
  .home 
    flex 1
    display flex 
    flex-direction column 
</style>

