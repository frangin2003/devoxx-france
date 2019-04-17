import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify";

import App from "./App";
import store from "./store";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
});
