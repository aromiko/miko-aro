import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerDisplayed: false
  },
  mutations: {
    toggleNavDrawer(state, payload) {
      state.drawerDisplayed = !payload;
    }
  },
  actions: {}
});
