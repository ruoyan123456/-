
import axios from 'axios'
import { Toast } from 'vant'
import Vue from 'vue'
Vue.use( Toast )
const instance = axios.create({  // 创建一个axios实例
  timeout: 5000,
});

// 默认表单提交
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器
instance.interceptors.request.use(function (config) {


      // 自定义加载图标
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner'
    });

  return config;
}, function (error) {
  // 请求错误
  return Promise.reject(error);
});

  // 响应拦截器
  instance.interceptors.response.use(function (response) {
    // 响应数据

    Toast.clear()

    return response;
  }, function (error) {
    // 响应错误
    return Promise.reject(error);
  });

const request = ({
  url,
  method = "GET",
  params,
  data, 
  withCredentials = false, 
  headers
}) => {
  return new Promise(( resolved,rejected ) => {
    switch ( method.toUpperCase() ) {
      case 'POST':
        var real_data = {}
        if ( headers['Content-Type'] == 'application/x-www-form-urlencoded' ){
          // 表单提交
          const p = new URLSearchParams()
          for ( let key in data ) {
            p.append( key, data[ key ] )
          }
          real_data = p
        } else {
          // json提交
          real_data = data 
        }
          instance.post( url,data = real_data, {
            withCredentials, // default
            headers
          }).then( res => resolved( res ))
            .catch( err => rejected( err ))
        break;

        case 'PUT':
          instance.put( url, {
            method,
            params,
            withCredentials, // default
            headers
          }).then( res => resolved( res ))
            .catch( err => rejected( err ))
        break;
        default:
          instance.get( url, {
            method,
            params,
            withCredentials, // default
            headers
          }).then( res => resolved( res ))
            .catch( err => rejected( err ))
          break;
        }
    })
}





export default request 

// module.exports = request 