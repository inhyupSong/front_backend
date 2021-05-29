import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

/* BootstrapVue */
/* import { BootstrapVue } from 'bootstrap-vue';
import { BIcon, BIconChevronDoubleDown, BIconChevronDoubleUp, BIconEyeFill, BIconEyeSlashFill } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon);
Vue.component('BIconChevronDoubleDown', BIconChevronDoubleDown);
Vue.component('BIconChevronDoubleUp', BIconChevronDoubleUp);
Vue.component('BIconEyeFill', BIconEyeFill);
Vue.component('BIconEyeSlashFill', BIconEyeSlashFill);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'; */

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      SongConfig: null,
    };
  },
  methods: {
    async loadConfig() {
      let config = null;
      try {
        config = await axios.get(`./config.js`);
      } catch (error) {
        config = await axios.get(`'@/../public/config.js'`);
      }
      this.SongConfig = eval(config.data);
    },
  },
  created() {
    this.loadConfig();
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

/* const TestArray = response.data.books.map((book) => {
  return {
    jItem_1: book.title,
    jItem_2: book.author,
    jItem_3: book.abstract,
  };
}); */
