import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  // 只有mutation才有权限修改state里面的数据
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => { context.commit('add') }, 1000)
    }
  },
  modules: {
  }
})
