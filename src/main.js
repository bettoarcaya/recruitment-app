import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import Notifications from "vue-notification";
import VModal from "vue-js-modal";
import store from './store';

Axios.defaults.headers.common['Autorization'] = `Bearer ${store.state.token}`;

Vue.prototype.$http = Axios;
Vue.prototype.$baseUrl = "http://recruitment-api.test:40";

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
