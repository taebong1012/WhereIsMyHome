import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.Kakao.init("1f3b1fef29a58d3928a1e245c9aca7fc");

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
