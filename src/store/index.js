import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      uname: '',
      isLogin: ''

  },
  mutations: {
    setUsersState(state, uname){
      state.uname = uname;
    }
  },
  actions: {
  },
  modules: {
  }
})
