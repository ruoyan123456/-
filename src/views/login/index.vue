<template>
  <div class="login">
    <div>
      <h3> 用户名 </h3>
      <input type="text" placeholder="请输入用户名" v-model = "username">
    </div>
    <div>
      <h3> 密码 </h3>
      <input type="text" placeholder="请输入密码" v-model = "password">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  beforeRouteLeave ( to,from,next ) {
    if ( this.username || this.password ) {
      if (confirm('您还没有提交，确定要离开吗？')) {
        next()
        return;
      } else {
        next( false )
        return;
      }
    }
    next()
  }
}
</script>

<style lang="stylus" scoped>
  .login 
      height 100% 
      flex 1
      overflow auto
</style>
