import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* BootstrapVue */
import { BootstrapVue } from "bootstrap-vue";
import {
  BIcon,
  BIconChevronDoubleDown,
  BIconChevronDoubleUp,
  BIconEyeFill,
  BIconEyeSlashFill
} from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconChevronDoubleDown", BIconChevronDoubleDown);
Vue.component("BIconChevronDoubleUp", BIconChevronDoubleUp);
Vue.component("BIconEyeFill", BIconEyeFill);
Vue.component("BIconEyeSlashFill", BIconEyeSlashFill);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/* const TestArray = response.data.books.map((book) => {
  return {
    jItem_1: book.title,
    jItem_2: book.author,
    jItem_3: book.abstract,
  };
}); */
