import Vue from "vue";
import Vuex from "vuex";
import products from "../Modules/products";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
  },
  plugins: [createPersistedState()],
});
