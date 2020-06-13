import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import Notifications from "vue-notification";
import VModal from "vue-js-modal";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.prototype.$http = Axios;
Vue.prototype.$baseUrl = "http://recruitment-api.test:40";

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount("#app");
