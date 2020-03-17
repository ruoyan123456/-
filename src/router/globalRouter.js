// import router from '@/router'
// import {
//   getCookie
// } from '@/utils/cookie'
// import Vue from 'vue'
// import { Toast,Notify  } from 'vant'
// Vue.use( Toast )
// Vue.use( Notify )

// 全局前置守卫

//   router.beforeEach(( to,from,next ) => {

//     if ( to.path == '/home/hot' ) {
//       next()
//     }

//     const token = getCookie(' _token')
//     // console.log('token',token)

//     if ( token || to.path == '/login') {
//       if ( to.path == '/buyer' ) {
//         const toast = Toast.loading({
//           duration: 0, // 持续展示 toast
//           forbidClick: true,
//           message: '3秒后自动进入购买页'
//         });
        
//         let second = 3;
//         const timer = setInterval(() => {
//           second--;
//           if (second) {
//             toast.message = `倒计时 ${second} 秒`;
//           } else {
//             clearInterval(timer);
//             // 手动清除 Toast
//             Toast.clear();
//           }
//         }, 1000);
//         setTimeout(() => {     
//           next()
//           return ;
//         },3000)
//       } else {
//         next()
//       }
//     } else {
//       next('/login')
//     }

// })