<template>
  <div class="layout"> 
    <Tab/>
    <keep-alive
      :include="$route.meta.include"
    >
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if = "tabBarFlag"/>
  </div>
</template>

<script>
import Tab from 'components/Tab'
import TabBar from 'components/TabBar'
export default {
  data () {
    return {
      tabBarFlag: true 
    }
  },
  components: {
    Tab,TabBar
  },
  watch: {
    $route: {
      deep: true,
      handler () {
        if ( this.$route.name == 'detail') {
          this.tabBarFlag = false 
        } else {
          this.tabBarFlag = true 
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .layout 
    display flex 
    flex-direction  column 
    height 100%
</style>

