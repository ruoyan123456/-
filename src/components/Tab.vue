<template>
  <header>
    <i class="fas fa-arrow-circle-left" @click = "goBack"></i>
    <h3> 若言 </h3>
  </header>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go( -1 )
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylesheets/constant.styl';
  header 
    height .505rem
    background $themeColor
    display flex 
    align-items center 
    padding 0 .15rem
    i 
      font-size .24rem
      color white 
    h3 
      flex 1
      text-align center 
      color white 
      font-size .2rem 
</style>

