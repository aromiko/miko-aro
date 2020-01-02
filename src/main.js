import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./views/Home.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  created() {
    AOS.init();
  },
  render: h => h(Home)
}).$mount("#home");
