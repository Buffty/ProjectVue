import { createStore } from 'vuex'

const store = createStore({
  state: {
    userName: '',
    password: ''
  },
  getters: {
    getInfoUser: function (state) {
      return state
    }
  },
  mutations:{
    insertInfoUser(state, userInfo) {
      state.userName = userInfo.user
      state.password = userInfo.password
    }
  }
})

export default store