import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      uname: '',
      isLogin: ''

  },
  mutations: {
    setUsersState(state, uname){
      state.uname = uname;
      state.isLogin = true;
    }
  },
  actions: {
    goLogin(context, obj){
        // 如果账户验证通过，则将用户名和登录状态存入vuex进行保存，作为其他页面判断登录状态的依据
      return new Promise((resolve, reject) => {
        axios.post(obj.urlStr, obj.params)
             .then( res => {
                console.log(res);
                if(200 == res.data.code){
                  context.commit("setUsersState", res.data.uname);
                  resolve();
                }else{
                  reject(res.data.msg);
                }
             })
      })
    },

  },
  modules: {
  }
})
