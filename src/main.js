import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import Notifications from "vue-notification";
import VModal from "vue-js-modal";
import store from './store';
import VueTailwind from 'vue-tailwind'

Axios.defaults.headers.common['token'] = `${store.state.token}`;

Vue.prototype.$http = Axios;
Vue.prototype.$baseUrl = "http://recruitment-api.test:40/api/v1";

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueTailwind)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
