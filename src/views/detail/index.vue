<template>
  <div class="detail">
    <img :src="$route.query.pic" alt="">
    <h3> {{ $route.query.d_title }} </h3>
    <p> 价格： {{ $route.query.jiage  }} </p>
    <p> 已售： {{ $route.query.xiaoliang  }} </p>
    <van-stepper v-model="num" integer />
    <!-- 加入购物车按钮 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click.native = "goService"/>
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click.native = "goShopCar" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" @click.native = "goShop"/>
      <van-goods-action-button type="warning" text="加入购物车" @click.native = "addShopCar" />
      <van-goods-action-button type="danger" text="立即购买"  @click.native = "goBuyer" />
    </van-goods-action>
  </div>
</template>

<script>
  import {
    getStorage,
    saveStorage
  } from '@/utils/storage'
  export default {
    data () {
      return {
        num: 1
      }
    },
    methods: {
      addShopCar () {
        // 获取数据  getStorage
        const data = getStorage('shopcar') 
        if ( data.length != 0 ) {
          // 有数据   判断是不是同一个商品
          const f = data.some( item => item.id == this.$route.params.id )
          if ( f ) {
            // true 同一个商品
            data.map( item => {
              if ( item .id == this.$route.params.id ) {
                item.num += this.num 
                return 
              }
            })
          } else {
            // false 不同商品
            data.push({
              ...this.$route.query,
              num: this.num 
            })
          }

        } else {
          // 没有数据
          // data.push(当前商品信息)
          data.push({
            ...this.$route.query,
            num: this.num 
          })
        }
        saveStorage('shopcar', data )

      },
      goService () {
        // console.log( this.$router ) 
        this.$router.push('/service')
        // 去客服页面 
      },
      goShopCar () {
        this.$router.push('/shopcar')
      },
      goShop () {
        this.$router.replace('/shop')
      },
      goBuyer () {
        this.$router.replace('/buyer')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail 
      height 100% 
      flex 1
      overflow auto
      img 
        width 100% 
        height 4.2rem
      h3 
        font-size .24rem 
        color red 
        font-weight bold 
</style>
