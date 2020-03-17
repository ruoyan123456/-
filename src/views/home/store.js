
import request from '@/utils/request'
import api from '@/api'


// 常量定义
const GET_HOT_MOVIES = 'GET_HOT_MOVIES'
const GET_NEW_MOVIES = 'GET_NEW_MOVIES'

export default {
  state: {
    movies: {}
  },
  actions: {
    async getMovies ({ commit }) {
      // 发送数据请求
      const result = await request({
        url: api.home.getHotMovie,
        params: {
          token: '',
          optimus_uuid: 'F2C8CA50060111E9BE3B2FA6BBC8F42F783446B54C974221B87A48F0BB404BD5',
          optimus_risk_level: 71,
          optimus_code: 10
        }
      })

      commit({
        type: GET_HOT_MOVIES,
        payload: result.data 
      })

    },
    async getNewMovies ({ commit },id) {
      const result = await request({
        url: api.home.getComingMovie,
        params: {
          token: '',
          movieIds: id, 
          optimus_uuid: 'F2C8CA50060111E9BE3B2FA6BBC8F42F783446B54C974221B87A48F0BB404BD5',
          optimus_risk_level: 71,
          optimus_code: 10
        }
      })
      commit({
        type: GET_NEW_MOVIES,
        payload: result.data.coming
      })
    }
  
  },  
  mutations: {
    [ GET_HOT_MOVIES ] ( state,action ) {
      // 修改数据
      state.movies = action.payload
    },
    [ GET_NEW_MOVIES ] ( state,action ) {
      state.movies.movieList.push( ...action.payload )
    }
  } 
}