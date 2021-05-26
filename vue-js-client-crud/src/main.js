import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

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