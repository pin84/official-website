import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const nav = {
  state: {
    navPath: '/',
  },

  mutations: {
    navPath(state, params) {
      state.navPath = params
    },
  }
}



export default new Vuex.Store({
  modules: {
    nav
  }

})