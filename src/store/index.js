import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      CITYJX: "cd",
      CITYNAME: "成都",
      FCONFIGID: 131052,
      JXNAME: "成都",
      PRODUCTNUM: 2,
    },
    commend: false,
    citylist: {}
  },
  mutations: {
    setCity(state, status) {
      state.city = status
    },
    get(state, status) {
      state.commend = status
    },
    date(state, status) {
      state.date = status
    }
  },
  actions: {
  },
  modules: {
  }
})
