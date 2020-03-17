<template>
  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        
        <div 
          class="item" 
          data-id="1190122" 
          data-bid="dp_wx_home_movie_list"
          v-for = "item of list"
          :key = "item.id"
          @click = "$router.push('/recommend')"
        >
          <div class="main-block">
            <div class="avatar" sort-flag="">
              <div class="default-img-bg">
                <img
                  :src="item.img | imgFilter"
                  onerror="this.style.visibility='hidden'"
                />
              </div>
            </div>
            <div class="mb-outline-b content-wrapper">
              <div class="column content">
                <div class="box-flex movie-title">
                  <div class="title line-ellipsis " style="display:flex"> {{ item.nm }}
                    <span class="version" :class = "item.version"></span>  
                  </div>
                </div>

                <div class="detail column">
                  <div class="score line-ellipsis">
                    <span class="score-suffix">观众评 </span>
                    <span class="grade"> {{ item.sc }} </span>
                  </div>

                  <div class="actor line-ellipsis">
                    主演: {{ item.star }}
                  </div>

                  <div class="show-info line-ellipsis">
                    {{ item.showInfo }}
                  </div>
                </div>
              </div>

              <div class="button-block" data-id="1190122">
                <div class="btn"
                  :class = "[ !item.globalReleased && 'pre' || 'normal' ]"
                >
                  <span class="fix" data-bid="dp_wx_home_movie_btn">
                    {{ !item.globalReleased && '预售' || '购买' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
   
  </div>
</template>


<script>
export default {
  props: ['resource'],
  computed: {
    list () {
      return this.resource && this.resource
    }
  }
}
</script>

<style scoped>
  @import '~assets/stylesheets/movies.css';
  .tab-content{
    height: 100%;
    overflow: hidden;
  }
  .page{
    height: 100%;
    overflow: hidden;
  }
  .list-wrap{
    padding-bottom: 1.5rem
  }
</style>




