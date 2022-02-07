import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import { router } from "./router.js";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//Lib
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import notes from "./components/note.vue";
Vue.component("note-card", notes);

new Vue({
  render: (h) => h(App),
  store,
  router: router,
}).$mount("#app");
