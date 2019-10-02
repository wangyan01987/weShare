import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate"
const store=new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state:{
      isLogin:false
  },
  mutations:{
       setLogin(state,val){
         state.isLogin=val;
       }
  }

});
export default store;
