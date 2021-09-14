import Vue from 'vue'
import Vuex from 'vuex'
// declarar todos os items do state antes do build
import resume from './modules/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    resume,
  },
  strict: true, // TODO: colocar false antes do build
})
